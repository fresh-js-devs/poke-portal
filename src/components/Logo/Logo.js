import React from 'react';

import './Logo.css';

const Logo = ({ onClick }) => {
  return (
    <div onClick={onClick} className='logo'>
      <h1>PokéPortal</h1>
    </div>
  );
};

export default Logo;
