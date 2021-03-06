let url = "https://pokeapi.co/api/v2/pokemon/";
var pokemonImg = document.getElementById("imgPokemonGame")
var textTop = document.getElementById("time");
var downloadTimer;
var score;

const optionButton = document.getElementsByClassName('answer-option')

function getResults() {
    const answerOption = document.getElementById("myModal2")
    console.log(localStorage.getItem('userScore'))
    // const resultsGame = document.createElement("article");
    answerOption.innerHTML = `<article><h2>RESULTS</h2>
    <p>You reveled ${localStorage.getItem('userScore')} pokemon!</p> </article>
    `;
    
    console.log(answerOption)
    //answerOption.appendChild(resultsGame);
    }

timeLeft = 10;

//funcion de timer countdown
function timer(){
    downloadTimer = setInterval(function(){
        if(timeLeft <= 0){
            clearInterval(downloadTimer);
            textTop.innerHTML = "You Lose!";
            getResults();
        } else {
            document.getElementById("time").innerHTML = timeLeft;
        }
        timeLeft -= 1;
    }, 1000);
}


//funcion para mostrar la imagen sin la classe ("silhouette")
function showPokemon(randImg){
    let imagenPokemon = document.createElement('img')
    imagenPokemon.setAttribute('src',randImg)
    pokemonImg.appendChild(imagenPokemon);

}



//funcion que me devuelve 4 pokemons random de una array 
  function getRandomAnswers(number, array){
    var strings = [];
    for(var i = 0; i < number; i++){
      var validValues = array.filter(el => !strings.includes(el) );
      var rand = Math.floor(Math.random() * validValues.length);
      strings.push(validValues[rand])
    }
    return strings;
  }
  
  let randPokemon

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

  function displayAnswers(pokemonName) {

    const bottonAnswers = document.querySelectorAll(".answer-option");
    bottonAnswers.innerHTML = "";
  
    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data)
        const results = data.results

        randPokemon = results[Math.floor(Math.random()*results.length)]
        console.log(randPokemon)

        let randId = randPokemon.url.split('/')[6];

        let randPokeImg = `img/${randId}.png`;
        showPokemon(randPokeImg)
        const names = results.map(pokemon => pokemon.name);
        
        let selectedNames = getRandomAnswers(3, names);
        
        selectedNames.push(randPokemon.name);
        
        shuffle(selectedNames);
        
        let i = 0;

        let buttons = [...bottonAnswers]

        buttons.forEach(item => {
            item.addEventListener('click', event => {
              //console.log(event.currentTarget.textContent)
              if (event.currentTarget.textContent === randPokemon.name){
                clearInterval(downloadTimer);
                pokemonImg.classList.remove('silhouette')
                textTop.innerHTML = "You Win!";
                score = JSON.parse(localStorage.getItem('userScore'));
                if (score){
                    score++
                    localStorage.setItem('userScore', JSON.stringify(score))
                    console.log(score)
                } else {
                    localStorage.setItem('userScore', JSON.stringify(1))
                }
                setTimeout(function(){
                    location.reload();
                }, 1500);
              } else {
                clearInterval(downloadTimer);
                textTop.innerHTML = "You lose!";
                getResults();
              }
            })
        })
        
        selectedNames.forEach(name => {
            const pokemonOption = document.createElement("article");
            pokemonOption.innerHTML = name;
            buttons[i].appendChild(pokemonOption);
            i++
        });

        timer()
        
        
      })
      .catch(function(error) {
        return error;
      });
  }

  displayAnswers();





  // Get the modal
let modal = document.getElementById("myModal2");
// Get the button that opens the modal
let btn = document.querySelectorAll(".answer-option");
// Get the <span> element that closes the modal
let span = document.querySelectorAll(".close");
let closeSpan = [...span];


// When the user clicks the button, open the modal
[...btn].forEach(item => {
  item.addEventListener("click", event => {
    modal.style.display = "block";
  });
});
// When the user clicks on <span> (x), close the modal

closeSpan.forEach(item => {
  console.log(item);
  item.addEventListener("click", event => {
    modal.style.display = "none";
  });
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};