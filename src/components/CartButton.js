import React, { useState } from 'react';

function Cart({ cart, deleteFromCart, total }) {
  const [showCart, setShowCart] = useState(false);

  if (showCart) {
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
        <button type="button" onClick={() => setShowCart(false)}>x</button>
      </div>
    );
  }

  return (
    <div>
      <button type="button" onClick={() => setShowCart(true)}>
        <img src="#" alt="Cart icon" />
      </button>
      <div>{cart.length}</div>
    </div>
  );
}

export default Cart;
