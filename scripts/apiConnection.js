'use strict';


const connectToApi = () => {
  const section = document.querySelector('.pokemon-properties');

 for (let i = 1; i < 151; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (pokemon) {
        const article = document.createElement('article')
        article.innerHTML = `
          <img src="../img/${i}" alt="${pokemon.name}" />
          <h3>${pokemon.name}</h3>
          <div>
            ${pokemon.types.map(pokemonType => `<p class="pokemon-type-label">${pokemonType.type.name}</p>`).join('')}
          </div>
        `
        section.appendChild(article);
      })
      .catch(function (error) {
        return error;
      })
  }
}

connectToApi();