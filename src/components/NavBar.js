import React from 'react';
import { Link } from 'react-router-dom';

import CartButton from './CartButton';

function NavBar({ cart }) {
  return (
    <div className="nav-bar">
      <h1>Amiibo Cart</h1>
      <ul className="links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
      </ul>
      <CartButton cart={cart} />
    </div>
  );
}

export default NavBar;
