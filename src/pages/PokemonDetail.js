import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {
  const [data, setData] = useState({ isLoading: false, error: '', card: {} });
  const { pokemonId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData({
          ...data,
          isLoading: true,
        });
        const result = await axios.get(
          `https://api.pokemontcg.io/v1/cards/${pokemonId}`,
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
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderCard = () => {
    const { isLoading, card, error } = data;
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    return (
      <div>
        <h1>{card.name}</h1>
        <img src={card.imageUrl} alt={card.name} />
        <ul>
          {card.attacks &&
            card.attacks.map(({ name, text }) => (
              <li key={`${name}-${text}`}>
                {name} - <i>{text}</i>
              </li>
            ))}
        </ul>
      </div>
    );
  };

  return <div>{renderCard()}</div>;
};

export default PokemonDetail;
