"use strict";
let url = "https://pokeapi.co/api/v2/pokemon/";

// const connectToApi = () => {
//   const pokemonCard = document.querySelector('.pokemon-properties');
//  for (let i = 1; i <= 151; i++) {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (pokemon) {
//         const article = document.createElement('article')
//         article.innerHTML = `
//           <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
//           <h2>${pokemon.name}</h2>
//           <div>
//              <p>height: ${(pokemon.height)*10} cm</p>
//             <p>weight: ${(pokemon.weight)/10} kg</p>
//             ${pokemon.types.map(pokemonType => `<p class="pokemon-type-label">Type: ${pokemonType.type.name}</p>`).join('')}
//           </div>
//         `
//         pokemonCard.appendChild(article);
//       })
//       .catch(function (error) {
//         return error;
//       })
//   }
// }

// connectToApi();

let pokemonImg = document.getElementsByClassName("pokemon-img");

function getPokemonsbyId() {
  for (var i = 0; i < pokemonImg.length; i++) {
    pokemonImg[i].onclick = function(e) {
      console.log(this.id);
      displayPokemon(this.id);
    };
  }
}
getPokemonsbyId();

function displayPokemon(id) {
  //const pokemonCard = document.querySelector('.pokemon-properties');

  const pokemonCard = document.querySelector(".modal-content");
  pokemonCard.innerHTML = "";

  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(pokemon) {
      const article = document.createElement("article");
      article.innerHTML = 
      `
          <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
          <h2>${pokemon.name}</h2>
          <div>
             <p>height: ${pokemon.height * 10} cm</p> 
            <p>weight: ${pokemon.weight / 10} kg</p>
            ${pokemon.types.map(pokemonType =>`<p class="pokemon-type-label">Type: ${pokemonType.type.name}</p>`).join("")}
          </div>
        `;
      pokemonCard.appendChild(article);
    })
    .catch(function(error) {
      return error;
    });
}

// Get the modal
let modal = document.getElementById("myModal");
// Get the button that opens the modal
let btn = document.querySelectorAll(".pokemon-img");
// Get the <span> element that closes the modal
let span = document.querySelectorAll(".close");
let closeSpan = [...span];
console.log(closeSpan);
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
