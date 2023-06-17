import { getPokemonDetail } from "../api";
import { SET_POKEMONS } from "./types";

const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});
// funcion de orden superior
const getPokemonsWithDetails = (pokemons) => async (dispatch) => {
  const pokemonDetailed = await Promise.all(
    pokemons.map((pokemon) => getPokemonDetail(pokemon))
  );
  // actualizar es el state de store redux
  dispatch(setPokemons(pokemonDetailed));
};

export { setPokemons };
export { getPokemonsWithDetails };
