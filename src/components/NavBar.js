import React from 'react';
import { Link } from 'react-router-dom';

import CartButton from './CartButton';
import SearchBar from './SearchBar';

import amiiboLogo from '../assets/amiibo-logo-color.png';

import '../styles/NavBar.css';

function NavBar({ cart }) {
  return (
    <div className="nav-bar">
      <Link to="/amiibo-cart">
        <div className="title">
          <img src={amiiboLogo} alt="Amiibo Logo" />
          <h1>Amiibo Cart</h1>
        </div>
      </Link>
      <SearchBar />
      <ul className="nav-links">
        <li><Link to="/amiibo-cart">Home</Link></li>
        <li><Link to="/amiibo-cart/shop?series=All">Shop</Link></li>
      </ul>
      <CartButton cart={cart} />
    </div>
  );
}

export default NavBar;
