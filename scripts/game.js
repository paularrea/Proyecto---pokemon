var timer = {

    // Count variable begins at 8.
    count: 10,

    // Start function begins countdown.
    start: function() {
        timer.decrement();
        counter = setInterval(timer.decrement, 1000);
    },

    // Decrease time by one per second. If the time hits 0, stop timer.
    decrement: function() {
        timer.count--;
        if (timer.count === 0) {
            timer.stop();
        }
    },

    // Clear interval and reset count.
    stop: function() {
        clearInterval(counter);
        timer.count = 9;
    },

    
};


function showPokemon(){
    var pokemonImg = document.getElementById("pokemonGame")
    
    if (timer === 0){
        pokemonImg.removeClass('silhouette')
    }
}

showPokemon(timer);
