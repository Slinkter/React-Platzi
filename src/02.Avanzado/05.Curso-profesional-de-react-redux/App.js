// Liberias
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Col } from "antd";
//
import { getPokemon } from "./api";
import { getPokemonsWithDetails } from "./tools";
// Componentes
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
// style
import "./App.css";
import logo from "./statics/logo.svg";
//---------->
const App = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      dispatch(getPokemonsWithDetails(pokemonsRes));
    };

    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>

      <Col>
        <PokemonList pokemons={pokemons} />
      </Col>
    </div>
  );
};

export default App;
