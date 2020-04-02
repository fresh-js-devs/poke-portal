import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import Layout from '../../components/organisms/Layout';
import Info from '../../components/atoms/Info';
import HeadingTwo from '../../components/atoms/HeadingTwo';
import HeadingThree from '../../components/atoms/HeadingThree';
import List from '../../components/atoms/List';
import ListItem from '../../components/atoms/ListItem';
import AttackBlock from '../../components/atoms/AttackBlock';

const PokemonDetailWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
`;

const PokemonDetailImg = styled.img`
  width: 300px;
  height: 100%;
`;

const PokemonDetail = () => {
  const [data, setData] = useState({ cards: [] });
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const pokemonId = location.pathname.split('/')[2];
      const result = await axios(
        `https://api.pokemontcg.io/v1/cards/${pokemonId}`,
      );
      setData(result.data);
    };
    fetchData();
  }, [location.pathname]);

  if (!data || !data.card) {
    return (
      <Layout>
        <div>Something went wrong. No Pokémon found here!</div>
      </Layout>
    );
  }

  const { card } = data;

  return (
    <Layout>
      <PokemonDetailWrapper>
        <PokemonDetailImg src={card.imageUrlHiRes} alt={card.id} />
        <Info>
          <HeadingTwo>{card.name}</HeadingTwo>
          <>
            ({card.supertype} / {card.subtype})
          </>
          {card.attacks && (
            <>
              <HeadingThree>Attacks</HeadingThree>
              <List>
                {card.attacks.map(attack => (
                  <ListItem key={attack.name}>
                    {attack.name} (Damage: {attack.damage})
                    {attack.text && <AttackBlock>{attack.text}</AttackBlock>}
                  </ListItem>
                ))}
              </List>
            </>
          )}
          {card.weaknesses && (
            <>
              <HeadingThree>Weaknesses</HeadingThree>
              <List>
                {card.weaknesses.map(weakness => (
                  <ListItem key={weakness.type}>
                    {weakness.type} ({weakness.value})
                  </ListItem>
                ))}
              </List>
            </>
          )}
        </Info>
      </PokemonDetailWrapper>
    </Layout>
  );
};

export default PokemonDetail;
