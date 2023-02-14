import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/ProductCard.css';

function ProductCard({ amiibo }) {
  const splitPrice = amiibo.price.toString().split('.');

  return (
    <Link
      to={`/shop/amiibo/${amiibo.id}`}
      state={{ amiibo }}
    >
      <div className="product-card">
        <div className="card-image">
          <img src={amiibo.image} alt={amiibo.name} />
        </div>
        <div className="card-info">
          <p>{amiibo.name}</p>
          <div className="price">
            <p className="dollars">${splitPrice[0]}</p>
            <p className="cents">{splitPrice[1]}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
