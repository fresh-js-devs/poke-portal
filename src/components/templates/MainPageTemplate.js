import React from "react";

import SearchBar from "../molecules/SearchBar";

import Layout from "../organisms/Layout";
import Cards from "../organisms/Cards";

const MainPageTemplate = ({
  handleChange,
  handleSearchPokemon,
  pokemonData,
  pokemonName,
}) => {
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

    return <Cards data={cards} error={error} />;
  };

  return (
    <Layout>
      <SearchBar
        handleChange={handleChange}
        handleSearchPokemon={handleSearchPokemon}
        pokemonName={pokemonName}
      />
      {renderCards()}
    </Layout>
  );
};

export default MainPageTemplate;
