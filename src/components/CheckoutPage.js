import React from 'react';

function CheckoutPage({ cart, total, deleteFromCart }) {
  return (
    <div className="cart">
      <div className="cart-items">
        {cart.map((cartItem) => (
          <div key={cartItem.id}>
            <div>
              <img src={cartItem.image} alt={cartItem.name} />
              <p>{cartItem.name} ({cartItem.series})</p>
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

export default CheckoutPage;
