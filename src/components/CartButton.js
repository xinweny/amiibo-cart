import React from 'react';
import { Link } from 'react-router-dom';

import cartIcon from '../assets/cart.svg';

function CartButton({ cart }) {
  return (
    <Link to="/checkout">
      <div className="cart-btn">
        <img src={cartIcon} alt="Cart icon" />
        {cart.length > 0
          ? (
            <div className="item-quantity">
              {cart.reduce((currNum, item) => currNum + item.quantity, 0)}
            </div>
          )
          : null}
      </div>
    </Link>
  );
}

export default CartButton;
