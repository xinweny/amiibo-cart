import React from 'react';
import { Link } from 'react-router-dom';

import CartButton from './CartButton';

import '../styles/NavBar.css';

function NavBar({ cart }) {
  return (
    <div className="nav-bar">
      <Link to="/">
        <h1>Amiibo Cart</h1>
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
