import React from 'react';
import styled from '@emotion/styled';

import CardImg from '../atoms/CardImg';

const CardsWrapper = styled.div`
  margin-top: 2rem;
`;

const Cards = () => {
  return (
    <CardsWrapper>
      <CardImg className='card' width='240' height='330' />
    </CardsWrapper>
  );
};

export default Cards;
