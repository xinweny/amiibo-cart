import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

function ProductPage() {
  const amiibo = useLocation().state
    ? useLocation().state
    : JSON.parse(localStorage.getItem(useParams().id));
  amiibo.price = Number(amiibo.price);

  return (
    <div className="product-page">
      <img src={amiibo.image} alt={amiibo.name} />
    </div>
  );
}

export default ProductPage;
