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
    } catch (error) {
      console.log(error);
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

    if (!pokemonData.cards) {
      return <div>No pokemon found!</div>;
    }

    return <Cards data={pokemonData.cards} />;
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
