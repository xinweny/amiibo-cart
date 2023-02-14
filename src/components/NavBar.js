import React from 'react';
import { Link } from 'react-router-dom';

import CartButton from './CartButton';

import amiiboLogo from '../assets/amiibo-logo-color.png';

import '../styles/NavBar.css';

function NavBar({ cart }) {
  return (
    <div className="nav-bar">
      <Link to="/">
        <div className="title">
          <img src={amiiboLogo} alt="Amiibo Logo" />
          <h1>Amiibo Cart</h1>
        </div>
      </Link>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
      </ul>
      <CartButton cart={cart} />
    </div>
  );
}

export default NavBar;
