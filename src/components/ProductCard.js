import React from 'react';
import { Link } from 'react-router-dom';

import Price from './Price';

import '../styles/ProductCard.css';

function ProductCard({ amiibo }) {
  return (
    <Link
      to={`/amiibo/${amiibo.id}`}
      state={{ amiibo }}
    >
      <div className="product-card">
        <div className="card-image">
          <img src={amiibo.image} alt={amiibo.name} />
        </div>
        <div className="card-info">
          <p>{amiibo.name}</p>
          <Price price={amiibo.price} />
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
