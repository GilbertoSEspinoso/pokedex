

const params = new URLSearchParams(window.location.search);
const pokemonId = params.get("id");

const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

function convertPokemonTypes(pokemonsTypes){
  return pokemonsTypes.map((typeSlot) => `<li class="pokemon-type">${typeSlot.type.name}</li>`)
}


function convertPokemonToHtml(pokemon){
  return `
    <div class="menu">
        <a href="./index.html" class="menu-btn" >
          <img src="./assets/img/icons8-back-white.png" alt="Back"/>
        </a>
      </div>
    
      <div class="top">
        <div class="top-bar">
          <h1 class="pokemon-name">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
          <span class="pokemon-number">#${pokemon.id.toString().padStart(3, '0')}</span>
        </div>
    
        <div class="poke-image-placeholder">
            <img src="${pokemon.sprites.other.dream_world.front_default}" class="pokemon-image" alt="">
        </div>
      </div>
    
      <div class="data">
          <ol class="pokemon-types">
              ${convertPokemonTypes(pokemon.types).join('')}
          </ol>  
      </div>
    `
}

const pokemonPerfil = document.getElementById('pokemonPerfil')

fetch(pokeUrl)
  .then(response => response.json())
  .then(pokemonData => {
    const pokemon = pokemonData; // Atribui os dados do pokémon à constante "pokemon"
    console.log('Dados do Pokémon:', pokemon);
    pokemonPerfil.innerHTML = convertPokemonToHtml(pokemon)
  }).catch((error) => console.error(error));

 

    
        
  







