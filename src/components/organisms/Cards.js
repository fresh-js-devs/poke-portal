import React from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';

import CardImg from '../atoms/CardImg';

const CardsWrapper = styled.div`
  margin-top: 2rem;
`;

const Cards = () => {
  const { push } = useHistory();

  const handleGoToPokemonDetail = pokemonId => push(`/pokemon/${pokemonId}`);

  return (
    <CardsWrapper>
      <CardImg
        className='card'
        width='240'
        height='330'
        onClick={() => handleGoToPokemonDetail(1)}
      />
    </CardsWrapper>
  );
};

export default Cards;
