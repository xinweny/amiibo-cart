import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

import ProductInfo from './ProductInfo';

function ProductPage({ addToCart }) {
  const amiibo = (useLocation().state)
    ? useLocation().state
    : JSON.parse(localStorage.getItem(useParams().id));
  amiibo.price = Number(amiibo.price);

  return (
    <div className="product-page">
      <img src={amiibo.image} alt={amiibo.name} />
      <ProductInfo addToCart={addToCart} amiibo={amiibo} />
    </div>
  );
}

export default ProductPage;
