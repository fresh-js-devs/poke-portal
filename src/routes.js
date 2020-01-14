import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import PostDetail from './pages/PostDetail/PostDetail';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/tweet/:tweetID' component={PostDetail} />
      </Switch>
    </BrowserRouter>
  );
};
