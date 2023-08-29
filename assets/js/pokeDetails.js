const detailName = document.getElementById("detailName");
const detailNumber = document.getElementById("detailNumber");
const detailImage = document.getElementById("detailImage");

const params = new URLSearchParams(window.location.search);
const pokemonId = params.get("id");

pokeApi.getPokemonDetail({ url: `https://pokeapi.co/api/v2/pokemon/${pokemonId}/` }).then((pokemon) => {
  detailName.textContent = pokemon.name;
  detailNumber.textContent = `#${pokemon.pkNumber.toString().padStart(3, '0')}`;
  detailImage.src = pokemon.image;
});