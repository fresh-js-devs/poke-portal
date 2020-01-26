import React from 'react';
import { useHistory } from 'react-router-dom';

import './Cards.css';

const Cards = ({ data }) => {
  const { push } = useHistory();

  const handleGoToPokemonDetail = pokemonId => {
    push(`/pokemon/${pokemonId}`);
  };

  return (
    <div className='cards'>
      {data.cards &&
        data.cards.map(card => (
          <img
            onClick={() => handleGoToPokemonDetail(card.id)}
            className='card'
            alt={card.id}
            key={card.id}
            src={card.imageUrl}
            width='240'
            height='330'
          />
        ))}
    </div>
  );
};

export default Cards;
