import React from 'react';
import { Link } from 'react-router-dom';

function CartButton({ cart }) {
  return (
    <Link to="/checkout">
      <img src="#" alt="Cart icon" />
      <div>{cart.reduce((currNum, item) => {
        console.log(currNum, item.quantity);
        return currNum + item.quantity;
      }, 0)}
      </div>
    </Link>
  );
}

export default CartButton;
