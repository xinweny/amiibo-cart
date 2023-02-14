import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import searchIcon from '../assets/search.svg';

import '../styles/SearchBar.css';

function SearchBar() {
  const [query, setQuery] = useState('');
  let linkRef; let inputRef;

  return (
    <div className="search-bar">
      <input
        ref={(ref) => { inputRef = ref; }}
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        onBlur={(e) => { e.target.value = ''; }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            inputRef.blur();
            linkRef.click();
          }
        }}
      />
      <Link
        to={`/shop?query=${query}`}
        ref={(ref) => { linkRef = ref; }}
      >
        <img src={searchIcon} alt="Search icon" />
      </Link>
    </div>
  );
}

export default SearchBar;
