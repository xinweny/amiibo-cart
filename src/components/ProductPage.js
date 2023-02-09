import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import InputQuantity from './InputQuantity';

function ProductPage({ addToCart }) {
  const [quantity, setQuantity] = useState(1);

  const amiibo = (useLocation().state)
    ? useLocation().state
    : JSON.parse(localStorage.getItem(useParams().id));
  amiibo.price = Number(amiibo.price);

  return (
    <div className="product-page">
      <img src={amiibo.image} alt={amiibo.name} />
      <div>
        <InputQuantity quantity={quantity} setQuantity={setQuantity} />
        <button type="button" onClick={() => addToCart(amiibo, quantity)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductPage;
