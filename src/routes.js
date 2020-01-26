import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import PokemonDetail from './pages/PokemonDetail/PokemonDetail';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/pokemon/:pokemonName' component={PokemonDetail} />
      </Switch>
    </BrowserRouter>
  );
};
