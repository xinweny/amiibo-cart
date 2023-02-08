import React from 'react';
import PropTypes from 'prop-types';

function Cart({ cart, deleteFromCart, total }) {
  return (
    <div className="cart">
      <div className="cart-items">
        {cart.map((cartItem) => (
          <div key={cartItem.id}>
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
      <p>Total: ${(Math.round(total * 100) / 100).toFixed(2)}</p>
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
  total: PropTypes.number.isRequired,
};

export default Cart;
