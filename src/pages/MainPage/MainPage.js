import React, { useState } from 'react';
import axios from 'axios';

import Cards from '../../components/organisms/Cards';
import Layout from '../../components/organisms/Layout';
import SearchBar from '../../components/molecules/SearchBar';

const MainPage = () => {
  const [pokemonData, setPokemonData] = useState({
    cards: [],
    isLoading: false,
    error: '',
  });
  const [pokemonName, setPokemonName] = useState({
    pokemonName: '',
  });
  const handleChange = event => {
    setPokemonName(event.target.value);
  };
  const handleSearchPokemon = async () => {
    try {
      setPokemonData({
        ...pokemonData,
        isLoading: true,
      });
      const result = await axios(
        `https://api.pokemontcg.io/v1/cards?name=${pokemonName}`,
      );

      const cards = result.data.cards;
      setPokemonData({
        ...pokemonData,
        cards,
        isLoading: false,
      });
    } catch (error) {
      setPokemonData({
        ...pokemonData,
        isLoading: false,
        error: error.message,
      });
    }
  };

  const renderCards = () => {
    if (pokemonData.isLoading) {
      return <div>Loading...</div>;
    }

    if (pokemonData.error) {
      return <div>{pokemonData.error}</div>;
    }

    return <Cards data={pokemonData} />;
  };

  return (
    <Layout>
      <SearchBar
        handleChange={handleChange}
        handleSearch={handleSearchPokemon}
      />
      {renderCards()}
    </Layout>
  );
};

export default MainPage;
