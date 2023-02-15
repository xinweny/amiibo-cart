import React from 'react';
import { Link } from 'react-router-dom';

import cartIcon from '../assets/cart.svg';

function CartButton({ cart }) {
  return (
    <Link to="/cart">
      <div className="cart-btn">
        <div className="item-quantity">
          {cart.reduce((currNum, item) => currNum + item.quantity, 0)}
        </div>
        <img src={cartIcon} alt="Cart icon" />
      </div>
    </Link>
  );
}

export default CartButton;
