import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import searchIcon from '../assets/search.svg';

import '../styles/SearchBar.css';

function SearchBar() {
  const [query, setQuery] = useState('');

  return (
    <div className="search-bar">
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      <Link to={`/shop?query=${query}`}>
        <img src={searchIcon} alt="Search icon" />
      </Link>
    </div>
  );
}

export default SearchBar;
