import React from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';

import CardImg from '../atoms/CardImg';

const CardsWrapper = styled.div`
  margin-top: 2rem;
`;

const Cards = ({ data }) => {
  const { push } = useHistory();

  const handleGoToPokemonDetail = pokemonId => push(`/pokemon/${pokemonId}`);

  return (
    <CardsWrapper>
      {data.map(({ id, imageUrl }) => (
        <CardImg
          key={id}
          alt={id}
          src={imageUrl}
          className='card'
          width='240'
          height='330'
          onClick={() => handleGoToPokemonDetail(id)}
        />
      ))}
    </CardsWrapper>
  );
};

export default Cards;
