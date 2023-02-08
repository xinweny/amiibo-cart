import React from 'react';
import PropTypes from 'prop-types';

function Cart({ cart, deleteFromCart }) {
  return (
    <div className="cart">
      {cart.map((cartItem) => (
        <div>
          <div>
            <img src={cartItem.image} alt={cartItem.name} />
            <p>{cartItem.name}</p>
            <p>{cartItem.quantity}</p>
            <p>${cartItem.price * cartItem.quantity}</p>
          </div>
          <button type="button" onClick={deleteFromCart}>x</button>
        </div>
      ))}
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  })).isRequired,
  deleteFromCart: PropTypes.func.isRequired,
};

export default Cart;
