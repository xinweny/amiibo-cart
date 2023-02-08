import React from 'react';
import { useLocation } from 'react-router-dom';

function ProductPage() {
  const amiibo = useLocation().state;
  console.log(amiibo);

  return (
    <div className="product-page" />
  );
}

export default ProductPage;
