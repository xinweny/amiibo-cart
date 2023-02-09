import React, { useState, useEffect } from 'react';

import InputQuantity from './InputQuantity';

function CartItem({ item, editQuantity, deleteItem }) {
  const [quantity, setQuantity] = useState({ ...item }.quantity);

  useEffect(() => editQuantity(item.id, quantity), [quantity]);

  return (
    <div className="cart-item">
      <div>
        <img src={item.image} alt={item.name} />
        <p>{item.name} ({item.series})</p>
        <InputQuantity quantity={quantity} setQuantity={setQuantity} />
        <p>${item.price * item.quantity}</p>
      </div>
      <button type="button" onClick={() => deleteItem(item.id)}>x</button>
    </div>
  );
}

export default CartItem;
