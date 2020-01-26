import React from 'react';

import './SearchBar.css';

const SearchBar = ({ handleChange, handleSearch }) => {
  return (
    <div className='search-bar'>
      <input className='search-input' type='text' onChange={handleChange} />
      <button className='search-button' onClick={handleSearch}>
        Search Pokémon
      </button>
    </div>
  );
};

export default SearchBar;
