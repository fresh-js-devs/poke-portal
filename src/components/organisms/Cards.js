import React from "react";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";

import CardImg from "../atoms/CardImg";

const CardsWrapper = styled.div`
  margin-top: 2rem;
`;

const Cards = ({ data }) => {
  const { push } = useHistory();

  const handleGoToPokemonDetail = (pokemonId) => push(`/pokemon/${pokemonId}`);

  return (
    <CardsWrapper>
      {data.map(({ id, imageUrl, name }) => (
        <CardImg
          alt={name}
          className="card"
          height="330"
          key={id}
          onClick={() => handleGoToPokemonDetail(id)}
          src={imageUrl}
          width="240"
        />
      ))}
    </CardsWrapper>
  );
};

export default Cards;
