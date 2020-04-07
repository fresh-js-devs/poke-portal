import React, { useState } from "react";
import axios from "axios";

import Template from "../components/templates/MainPageTemplate";

const MainPage = () => {
  const [pokemonData, setPokemonData] = useState({
    cards: [],
    isLoading: false,
    error: "",
  });
  const [pokemonName, setPokemonName] = useState("");

  const handleChange = (event) => setPokemonName(event.target.value);

  const handleSearchPokemon = async () => {
    try {
      setPokemonData({
        ...pokemonData,
        isLoading: true,
      });
      const result = await axios(
        `https://api.pokemontcg.io/v1/cards?name=${pokemonName}`
      );
      const { cards } = result.data;
      setPokemonData({
        ...pokemonData,
        cards,
        isLoading: false,
      });
    } catch ({ message }) {
      setPokemonData({
        ...pokemonData,
        isLoading: false,
        error: message,
      });
    }
  };

  return (
    <Template
      handleChange={handleChange}
      handleSearchPokemon={handleSearchPokemon}
      pokemonData={pokemonData}
      pokemonName={pokemonName}
    />
  );
};

export default MainPage;
