const params = new URLSearchParams(window.location.search);
const pokemonId = params.get("id");


const pokemonDetail = document.getElementById('pokemonDetail');

function convertPokemonToLi(pokemon) {
    return `<div class="title ${pokemon.type}"> 

            <a href="./index.html">
                <img src="./assets/img/icons8-back-white.png" class="btn" alt="Back"/>
            </a>

            <span class="poke-name">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</span>
            <span class="poke-number">#${pokemon.number.toString().padStart(3, '0')}</span>

        </div>
               
        <div class="top ${pokemon.type}">

            <div class="teste ">
                <div class="image-pokemon">
                    <img src="${pokemon.photo}" alt="pokemon">
                </div>
                <div class="poke-types">
                    ${pokemon.types.map((type) => `<span class="poke-type ${type}">${type}</span>`).join('')}
                </div>
            </div>

        </div>
               
        <div class="status">

            <h4 class="base-stats">Base Stats</h4>

            <div class="data-stats"> 

                <div class="data-stats-row">
                    <div class="stats-desc">HP</div>
                    <div class="stats-number">${pokemon.stats[0]}</div>
                    <div class="stats-bar">
                        <div class="bar-outer">
                            <div class="bar-inner" style="width: ${pokemon.stats[0]}%"></div>
                        </div>
                    </div>
                </div>
                <div class="data-stats-row">
                    <div class="stats-desc">ATK</div>
                    <div class="stats-number">${pokemon.stats[1]}</div>
                    <div class="stats-bar">
                        <div class="bar-outer">
                        <div class="bar-inner" style="width: ${pokemon.stats[1]}%"></div>
                        </div>
                    </div>
                </div>
                <div class="data-stats-row">
                    <div class="stats-desc">DEF</div>
                    <div class="stats-number">${pokemon.stats[2]}</div>
                    <div class="stats-bar">
                        <div class="bar-outer">
                        <div class="bar-inner" style="width: ${pokemon.stats[2]}%"></div>
                        </div>
                    </div>
                </div>
                    <div class="data-stats-row">
                    <div class="stats-desc">S.ATK</div>
                    <div class="stats-number">${pokemon.stats[3]}</div>
                    <div class="stats-bar">
                        <div class="bar-outer">
                        <div class="bar-inner" style="width: ${pokemon.stats[3]}%"></div>
                        </div>
                    </div>
                </div>
                <div class="data-stats-row">
                    <div class="stats-desc">S.DEF</div>
                    <div class="stats-number">${pokemon.stats[4]}</div>
                    <div class="stats-bar">
                        <div class="bar-outer">
                        <div class="bar-inner" style="width: ${pokemon.stats[4]}%"></div>
                        </div>
                    </div>
                </div>
                <div class="data-stats-row">
                    <div class="stats-desc">SPD</div>
                    <div class="stats-number">${pokemon.stats[5]}</div>
                    <div class="stats-bar">
                    <div class="bar-outer">
                        <div class="bar-inner" style="width: ${pokemon.stats[5]}%"></div>
                        </div>
                        </div>
                    </div>

                </div>

        </div>`
}

const statNumber = document.querySelectorAll('.stats-number')


function displayPokemonDetail(pokemon) {
    const li = convertPokemonToLi(pokemon);
    pokemonDetail.innerHTML = li;
}

pokeApi.getPokemon(pokemonId)
    .then(displayPokemonDetail);




