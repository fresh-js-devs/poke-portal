import React from 'react';

import Logo from './components/Logo';
import MessageBox from './components/MessageBox';
import Post from './components/Post';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Logo />
      <div className='container'>
        <h1>Main page</h1>

        <MessageBox />

        <div className='content'>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
}

export default App;
