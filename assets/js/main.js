const pokemonList = document.getElementById("pokemonList");
const loadMorePokemon = document.getElementById("loadMorePokemon");
const limit = 12;
let offset = 0;

function loadPokemonItem(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons
      .map(
        (pokemon) => `
        <li class="pokemon ${pokemon.principalType}">
        <span class="number">#${pokemon.pkNumber}</span>
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
          <img src="${pokemon.image}" alt="${pokemon.name}" />
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
