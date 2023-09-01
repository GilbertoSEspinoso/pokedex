const params = new URLSearchParams(window.location.search);
const pokemonId = params.get("id");

const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

function convertPokemonTypes(pokemonsTypes){
  return pokemonsTypes.map((typeSlot) => `<span class="pokemon-type">${typeSlot.type.name}</span>`)
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
          <div class="pokemon-types">
              ${convertPokemonTypes(pokemon.types).join('')}
          </div>
          
          <h4 style="color: rgb(116, 203, 72);">Base Stats</h4>

        <div class="data-stats">           
          <div class="data-stats-row">
                <div class="stats-desc">HP</div>
                <div class="stats-number">045</div>
                <div class="stats-bar">
                  <div class="bar-outer">
                    <div class="bar-inner" style="width: 45%"></div>
                  </div>
                </div>
          </div>
          <div class="data-stats-row">
              <div class="stats-desc">ATK</div>
              <div class="stats-number">049</div>
              <div class="stats-bar">
                <div class="bar-outer">
                  <div class="bar-inner" style="width: 49%"></div>
                </div>
              </div>
          </div>
          <div class="data-stats-row">
              <div class="stats-desc">DEF</div>
              <div class="stats-number">049</div>
              <div class="stats-bar">
                <div class="bar-outer">
                  <div class="bar-inner" style="width: 49%"></div>
                </div>
          </div>
          </div>
            <div class="data-stats-row">
              <div class="stats-desc">S.ATK</div>
              <div class="stats-number">065</div>
              <div class="stats-bar">
                <div class="bar-outer">
                  <div class="bar-inner" style="width: 65%"></div>
                </div>
              </div>
          </div>
          <div class="data-stats-row">
              <div class="stats-desc">S.DEF</div>
              <div class="stats-number">065</div>
              <div class="stats-bar">
                <div class="bar-outer">
                  <div class="bar-inner" style="width: 65%"></div>
                </div>
              </div>
          </div>
          <div class="data-stats-row">
            <div class="stats-desc">SPD</div>
            <div class="stats-number">045</div>
            <div class="stats-bar">
              <div class="bar-outer">
                <div class="bar-inner" style="width: 45%"></div>
              </div>
          </div>
      </div>
    `
}

const pokemonPerfil = document.getElementById('pokemonPerfil')

fetch(pokeUrl)
  .then(response => response.json())
  .then(pokemonData => { 
    const pokemon = pokemonData; // Atribui os dados do pokémon à constante "pokemon"
    pokemonPerfil.innerHTML = convertPokemonToHtml(pokemon)
  }).catch((error) => console.error(error));
    
        





