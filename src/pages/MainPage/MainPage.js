import React, { useState } from 'react';
import axios from 'axios';

import Cards from '../../components/organisms/Cards';
import Layout from '../../components/organisms/Layout';
import SearchBar from '../../components/molecules/SearchBar';

const MainPage = () => {
  const [data, setData] = useState({
    cards: [],
  });
  const [pokemonName, setPokemonName] = useState({
    pokemonName: '',
  });

  const handleChange = event => {
    setPokemonName(event.target.value);
  };

  const handleSearchPokemon = async () => {
    const result = await axios(
      `https://api.pokemontcg.io/v1/cards?name=${pokemonName}`,
    );
    setData(result.data);
  };

  return (
    <Layout>
      <SearchBar
        handleChange={handleChange}
        handleSearch={handleSearchPokemon}
      />
      <Cards data={data} />
    </Layout>
  );
};

export default MainPage;
