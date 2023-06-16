import axios from "axios";
//
const url = "https://pokeapi.co/api/v2/pokemon?limit=50";
//
const getPokemon = () => {
  const pokemons = axios
    .get(url)
    .then((res) => res.data.results)
    .catch((err) => console.log(err));
  return pokemons;
};

const getPokemonDetail = (pokemon) => {
  const pokemoenDetail = axios
    .get(pokemon.url)
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return pokemoenDetail;
};

export { getPokemon };
export { getPokemonDetail };
