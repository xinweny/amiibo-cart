import React, { useState } from 'react';

import InputQuantity from './InputQuantity';

function ProductInfo({ addToCart, amiibo }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <InputQuantity quantity={quantity} setQuantity={setQuantity} />
      <button type="button" onClick={() => addToCart(amiibo, quantity)}>
        Add To Cart
      </button>
    </div>
  );
}

export default ProductInfo;
