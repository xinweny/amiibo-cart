import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Cart from './Cart';

function NavBar({ cart, deleteFromCart, total }) {
  return (
    <div className="nav-bar">
      <h1>Amiibo Cart</h1>
      <ul className="links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
      </ul>
      <Cart cart={cart} total={total} deleteFromCart={deleteFromCart} />
    </div>
  );
}

NavBar.propTypes = {
  cart: Cart.propTypes.cart.isRequired,
  deleteFromCart: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};

export default NavBar;
