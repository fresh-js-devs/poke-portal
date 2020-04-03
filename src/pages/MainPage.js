import React, { useState } from 'react';
import axios from 'axios';

import Layout from '../components/organisms/Layout';
import SearchBar from '../components/molecules/SearchBar';

const MainPage = () => {
  const [pokemonData, setPokemonData] = useState({
    cards: [],
    isLoading: false,
    error: '',
  });
  const [pokemonName, setPokemonName] = useState('');

  const handleChange = event => setPokemonName(event.target.value);

  return (
    <Layout>
      <SearchBar handleChange={handleChange} />
    </Layout>
  );
};

export default MainPage;
