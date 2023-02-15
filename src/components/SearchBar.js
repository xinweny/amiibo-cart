import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import searchIcon from '../assets/search.svg';

import '../styles/SearchBar.css';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  let linkRef; let inputRef;

  return (
    <div className="search-bar">
      <input
        ref={(el) => { inputRef = el; }}
        type="text"
        placeholder={placeholder}
        onFocus={() => setPlaceholder('Search amiibos...')}
        onChange={(e) => setQuery(e.target.value)}
        onBlur={(e) => {
          e.target.value = '';
          setPlaceholder('');
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            inputRef.blur();
            linkRef.click();
          }
        }}
      />
      <Link
        to={`/shop?query=${query}`}
        ref={(el) => { linkRef = el; }}
      >
        <img src={searchIcon} alt="Search icon" />
      </Link>
    </div>
  );
}

export default SearchBar;
