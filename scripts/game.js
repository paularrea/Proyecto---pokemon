

//variable con el contenido de la currentQuestion
var currentQuestion = {
    ids: [],
    answers: []
};


var answersCorrect = 0;
var answersIncorrect = 0;
var answersTimedOut = 0;




//countdown desde 10s
function displayTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? 0 + seconds : seconds;
        display.textContent = seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
        if (timer === 0){
            stopTimer(); //declaro funcion stop timer o 
        }
}

window.onload = function () {
    var tenSeconds = 10
        displayTime = document.querySelector('#time');
    displayTimer(tenSeconds, displayTime);

}






var game = {

    queryURL: 'http://pokeapi.co/api/v2/pokemon/',

    questionsAsked = 0,

    
}
 


selectQuestion: function() {
    // Verify that the game is not done.
    if (game.questionsAsked === 10) {
        DOMFunctions.callDOMFunctions('gameComplete');
    } else {
        // Clear answer and answer ID arrays.
        currentQuestion.answers = [];
        currentQuestion.ids = [];
        // Increment the number of questions asked.
        game.questionsAsked++;
        // Randomly select 4 unique numbers between 1 and 721.
        var idArray = [];
        while (idArray.length < 4) {
            var pokemonID = Math.ceil(Math.random() * 151);
            if (idArray.indexOf(pokemonID) !== -1) continue;
            idArray.push(pokemonID);
        }
        // Randomly select which of the 4 numbers will be the answer ID.
        currentQuestion.answerIndex = Math.floor(Math.random() * 4);
        // For each ID, push the name and id to the possible answers array.
        idArray.forEach(function(element) {
            // Query Pokeapi
            $.ajax(url = game.queryURL + element + '/', method = game.queryMethod)
                .done(function(response) {
                    // Push name and ID to currentQuestion.
                    currentQuestion.answers.push(response.species.name);
                    currentQuestion.ids.push(response.id);
                    // Check whether to start the question.
                    game.startQuestion();
                });
        });
    }
},



startQuestion: function() {
    // Once the fourth AJAX call has been made, start the question.
    if (currentQuestion.ids.length === 4) {
        DOMFunctions.callDOMFunctions(event = 'newQuestion');
        timer.start();
    }
},

isCorrect: function(answer) {
    // Check whether the answer given is the correct answer.
    if (answer === currentQuestion.answers[currentQuestion.answerIndex]) {
        return true;
    } else {
        return false;
    }
},

updateScores: function(correct) {
    // Increment appropriate score counter variable.
    if (correct === true) {
        answersCorrect++;
    } else if (correct === false) {
        answersIncorrect++;
    } else {
        answersTimedOut++;
    }
},

resetGame: function() {
    // Reset game-wide variables.
    game.questionsAsked = 0;
    answersCorrect = 0;
    answersIncorrect = 0;
    answersTimedOut = 0;
}
};






var gameFunctions = {

    displayTimer,
        //display el countdown
    displayQuestion,
        //muestra preguntas nuevas 
        //borra preguntas previas
        //muestra imagen con class("silhouette")
        //set image src
        //hacer que los botones de las posibles respuestas se comporten como botones y enlazarlos con (correctArr, IncorrectArr, timeOutArr)
    displayAnswer,
        //esconde timer y opciones de respuesta .hide() 
        //muestra resultados y la respuesta correcta .show()
        //descubre imagen / .toggleClass("silhouette")
        //mostrar resultado
        if (correct === true) {
        //elvalordelid.text('Correct!');
    } else if (correct === false) {
       //elvalordelid.text('Incorrect');
    } else {
        //elvalordelid.text('Time is Up!');
    }
    hideAnswer,
        //esconde answer .hide()
        //muestra timer previamente escondido .show()
    displayResults,
        //esconde timer .hide()
        //esconde pregunta .hide()
        //muestra resultados i botton de restart .show()
        //muestra texto de resultados(correct, incorrect, no-answered)

    displayNewGame,
        //esconde boton restart, timer y resultados .hide()
        //que el countdown empiece de 0
        //mostrar boton de play .show()
        //mostrar imagen silueta pokemon

}