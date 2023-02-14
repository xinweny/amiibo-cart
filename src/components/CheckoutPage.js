import React from 'react';

import CartItem from './CartItem';

import '../styles/CheckoutPage.css';

function CheckoutPage({
  cart,
  total,
  editQuantityInCart,
  deleteFromCart,
}) {
  return (
    <div className="checkout-page">
      <div className="cart">
        <div className="cart-items">
          {cart.map((cartItem) => (
            <CartItem
              key={cartItem.id}
              item={cartItem}
              editQuantity={editQuantityInCart}
              deleteItem={deleteFromCart}
            />
          ))}
        </div>
        <p>Total: ${total}</p>
      </div>
      <button className="checkout-btn" type="button">Checkout</button>
    </div>
  );
}

export default CheckoutPage;
