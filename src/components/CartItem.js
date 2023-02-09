import React, { useState, useEffect } from 'react';

function CartItem({ item, editQuantity, deleteItem }) {
  const [quantity, setQuantity] = useState({ ...item }.quantity);

  useEffect(() => editQuantity(item.id, quantity), [quantity]);

  const changeQuantity = (value) => {
    const re = /^[0-9\b]+$/;
    if (value === '' || re.test(value)) setQuantity(Number(value));
  };

  const decrement = () => setQuantity((prev) => {
    const num = prev - 1;
    if (num < 0) return 0;
    return num;
  });

  const increment = () => setQuantity((prev) => prev + 1);

  return (
    <div className="cart-item">
      <div>
        <img src={item.image} alt={item.name} />
        <p>{item.name} ({item.series})</p>
        <div>
          <button type="button" onClick={() => decrement()}>-</button>
          <input value={quantity} onChange={(e) => changeQuantity(e.target.value)} />
          <button type="button" onClick={() => increment()}>+</button>
        </div>
        <p>${item.price * item.quantity}</p>
      </div>
      <button type="button" onClick={() => deleteItem(item.id)}>x</button>
    </div>
  );
}

export default CartItem;
