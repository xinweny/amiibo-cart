import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/ProductCard.css';

function ProductCard({ amiibo }) {
  return (
    <Link
      to={`/shop/amiibo/${amiibo.id}`}
      state={{ amiibo }}
      onClick={() => localStorage.setItem(amiibo.id, JSON.stringify(amiibo))}
    >
      <div className="product-card">
        <img src={amiibo.image} alt={amiibo.name} />
        <p>{amiibo.name}</p>
        <p>${amiibo.price}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
