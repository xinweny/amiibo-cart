import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ amiibo }) {
  return (
    <Link
      className="product-card"
      to={`/amiibo/${amiibo.id}`}
      state={amiibo}
      onClick={() => localStorage.setItem(amiibo.id, JSON.stringify(amiibo))}
    >
      <div>
        <img src={amiibo.image} alt={amiibo.name} />
        <p>{amiibo.name}</p>
        <p>${amiibo.price}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
