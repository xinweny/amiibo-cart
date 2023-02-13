import React from 'react';

import ProductCard from './ProductCard';

import '../styles/CardDisplay.css';

function CardDisplay({ series, amiibos }) {
  return (
    <div className="card-display">
      <h2>{`${series} (${amiibos.length})`}</h2>
      <div className="product-cards">
        {amiibos.map((a) => <ProductCard key={a.id} amiibo={a} />)}
      </div>
    </div>
  );
}

export default CardDisplay;
