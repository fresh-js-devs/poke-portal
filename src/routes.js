import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import MainPage from './pages/MainPage';
import PokemonDetail from './pages/PokemonDetail';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/pokemon/:pokemonId' component={PokemonDetail} />
      </Switch>
    </BrowserRouter>
  );
};
