import { getPokemonDetail } from "../api";
import { SET_POKEMONS } from "./types";

const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

const getPokemonsWithDetails =
  (pokemons = []) =>
  async (dispatch) => {
    console.log(pokemons);
    const pokemonDetailed = await Promise.all(
      pokemons.map((pokemon) => getPokemonDetail(pokemon))
    );
    console.log(pokemonDetailed);
    dispatch(setPokemons(pokemonDetailed));
  };

export { setPokemons };
export { getPokemonsWithDetails };
