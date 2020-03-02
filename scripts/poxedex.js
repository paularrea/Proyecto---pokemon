 "use strict"
let pokemonPokedex = document.querySelectorAll('pokemon-img')

 // onclick para que al pinchar un pokemon nos aparezca la info del mismo en pantalla en ventana flotante
    $('.pokemon-img').on('click', function() {
        if(pokemonPokedex.id === pokemonCard)
       connectToApi();
    });