import React, { useState } from 'react';

function ProductInfo({ addToCart, amiibo }) {
  const [quantity, setQuantity] = useState(1);

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
    <div>
      <div>
        <button type="button" onClick={() => decrement()}>-</button>
        <input
          id="quantity"
          type="text"
          value={quantity}
          onChange={(e) => changeQuantity(e.target.value)}
        />
        <button type="button" onClick={() => increment()}>+</button>
      </div>
      <button
        type="button"
        onClick={() => addToCart(amiibo, quantity)}
      >
        Add To Cart
      </button>
    </div>
  );
}

export default ProductInfo;
