function convertPokemonToLi(pokemon) {
  return `
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
            <img src="${pokemon.image}" alt="${pokemon.name}"/>
          </div>
        </li>
        `;
}

const pokemonList = document.getElementById("pokemonList");

pokeApi.getPokemons().then((pokemons = []) => {
  const newHtml = pokemons.map(convertPokemonToLi).join("");
  pokemonList.innerHTML = newHtml;
});
