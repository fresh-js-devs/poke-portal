import React from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';

import CardImg from '../atoms/CardImg';

const CardsWrapper = styled.div`
  margin-top: 2rem;
`;

const Cards = ({ data }) => {
  const { push } = useHistory();

  const handleGoToPokemonDetail = pokemonId => {
    push(`/pokemon/${pokemonId}`);
  };

  return (
    <CardsWrapper>
      {data &&
        data.cards &&
        data.cards.map(card => (
          <CardImg
            onClick={() => handleGoToPokemonDetail(card.id)}
            className='card'
            alt={card.id}
            key={card.id}
            src={card.imageUrl}
            width='240'
            height='330'
          />
        ))}
    </CardsWrapper>
  );
};

export default Cards;
