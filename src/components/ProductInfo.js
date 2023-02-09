import React, { useState } from 'react';

function ProductInfo({ addToCart, amiibo }) {
  const [quantity, setQuantity] = useState(1);

  const changeQuantity = (value) => {
    const re = /^[0-9\b]+$/;
    if (value === '' || re.test(value)) setQuantity(Number(value));
  };

  return (
    <div>
      <div>
        <button
          type="button"
          onClick={() => setQuantity((prev) => {
            const num = prev - 1;
            if (num < 0) return 0;
            return prev - 1;
          })}
        >
          -
        </button>
        <input
          id="quantity"
          type="text"
          value={quantity}
          onChange={(e) => changeQuantity(e.target.value)}
        />
        <button type="button" onClick={() => setQuantity((prev) => prev + 1)}>+</button>
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
