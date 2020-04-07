import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import axios from "axios";

import Template from "../components/templates/PokemonDetailTemplate";

const PokemonDetail = () => {
  const [data, setData] = useState({ isLoading: false, error: "", card: {} });

  const { pokemonId } = useParams();

  const fetchData = async () => {
    try {
      setData({
        ...data,
        isLoading: true,
      });
      const result = await axios.get(
        `https://api.pokemontcg.io/v1/cards/${pokemonId}`
      );

      setData({
        isLoading: false,
        card: result.data.card,
      });
    } catch ({ message }) {
      setData({
        ...data,
        isLoading: false,
        error: message,
      });
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { isLoading, error, card } = data;

  return <Template isLoading={isLoading} card={card} error={error} />;
};

export default PokemonDetail;
