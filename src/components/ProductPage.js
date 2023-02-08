import React from 'react';
import { useLocation } from 'react-router-dom';

function ProductPage() {
  const amiibo = useLocation().state;

  return (
    <div className="product-page">
      <img src={amiibo.image} alt={amiibo.name} />
    </div>
  );
}

export default ProductPage;
