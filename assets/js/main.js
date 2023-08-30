const pokemonList = document.getElementById("pokemonList");
const loadMorePokemon = document.getElementById("loadMorePokemon");
const limit = 12;
let offset = 0;
let pokeId = 0;

function loadPokemonItem(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map((pokemon) => 
        `
          <li class="pokemon ${pokemon.principalType}">
            <span class="number">#${pokemon.pkNumber.toString().padStart(3,'0')}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
              <ol class="types">
              ${pokemon.types
                .map(
                  (principalType) =>
                    `<li class="type ${principalType}">${principalType}</li>`
                )
                .join("")}
              </ol>
              <a href="pokemon.html?id=${pokemon.pkNumber}" class="pokemon-link">
                <img src="${pokemon.image}" alt="${pokemon.name}" />
              </a>
            </div>
          </li>
        `
      )
      .join("");
    pokemonList.innerHTML += newHtml;
  });
}

loadPokemonItem(offset, limit);

loadMorePokemon.addEventListener("click", () => {
  offset += limit;
  loadPokemonItem(offset, limit);
});
