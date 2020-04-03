import React, { useState } from 'react';
import axios from 'axios';

import Layout from '../components/organisms/Layout';
import SearchBar from '../components/molecules/SearchBar';
import Cards from '../components/organisms/Cards';

const MainPage = () => {
  const [pokemonData, setPokemonData] = useState({
    cards: [],
    isLoading: false,
    error: '',
  });
  const [pokemonName, setPokemonName] = useState('');

  const handleChange = event => setPokemonName(event.target.value);

  const handleSearchPokemon = async () => {
    try {
      setPokemonData({
        ...pokemonData,
        isLoading: true,
      });
      const result = await axios(
        `https://api.pokemontcg.io/v1/cards?name=${pokemonName}`,
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

  const renderCards = () => {
    const { isLoading, cards, error } = pokemonData;
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    if (!cards) {
      return <div>No pokemon found!</div>;
    }

    return <Cards data={pokemonData.cards} error={pokemonData.error} />;
  };

  return (
    <Layout>
      <SearchBar
        handleChange={handleChange}
        pokemonName={pokemonName}
        handleSearchPokemon={handleSearchPokemon}
      />
      {renderCards()}
    </Layout>
  );
};

export default MainPage;
