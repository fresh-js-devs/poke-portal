import React from 'react';

import './Logo.css';

const Logo = ({ onClick }) => {
  return (
    <div onClick={onClick} className='logo'>
      Tweetly
    </div>
  );
};

export default Logo;
