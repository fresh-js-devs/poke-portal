import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './PokemonDetail.css';
import Layout from '../../components/Layout/Layout';
import { useLocation } from 'react-router-dom';

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
  }, []);

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
      <div className='pokemon-detail'>
        <img src={card.imageUrlHiRes} alt={card.id} />
        <div className='info'>
          <h2>{card.name}</h2>
          <span className='info-type'>
            ({card.supertype} / {card.subtype})
          </span>
          {card.attacks && (
            <div className='info-list'>
              <h3>Attacks</h3>
              <ul>
                {card.attacks.map(attack => (
                  <li key={attack.name}>
                    {attack.name} (Damage: {attack.damage})
                    {attack.text && <span>{attack.text}</span>}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {card.weaknesses && (
            <div className='info-list'>
              <h3>Weaknesses</h3>
              <ul>
                {card.weaknesses.map(weakness => (
                  <li key={weakness.type}>
                    {weakness.type} ({weakness.value})
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default PokemonDetail;
