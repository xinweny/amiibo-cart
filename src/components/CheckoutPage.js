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
      <h1>Shopping Cart</h1>
      <div>
        <div className="cart">
          <div className="cart-header">
            <p>Price</p>
          </div>
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
        </div>
        <div className="to-checkout-section">
          <p>Total: ${total.toFixed(2)}</p>
          <button className="checkout-btn" type="button">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
