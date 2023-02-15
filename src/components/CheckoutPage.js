import React from 'react';

import CartItem from './CartItem';

import '../styles/CheckoutPage.css';

function CheckoutPage({
  cart,
  total,
  editQuantityInCart,
  deleteFromCart,
}) {
  const subTotal = <p>Total ({cart.length} item{cart.length === 1 ? '' : 's'}): ${total.toFixed(2)}</p>;

  return (
    <div className="checkout-page">
      <h1>Shopping Cart</h1>
      <div>
        {(cart.length > 0)
          ? (
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
              <div className="subtotal">
                {subTotal}
              </div>
            </div>
          )
          : (
            <div className="no-items">
              <p>No items in cart.</p>
            </div>
          )}
        <div className="to-checkout-section">
          {subTotal}
          <button className="checkout-btn" type="button">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
