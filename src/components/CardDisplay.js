import React from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from './ProductCard';

import '../styles/CardDisplay.css';

function CardDisplay({ amiibos }) {
  const { series } = useParams();

  const showAmiibos = (series)
    ? amiibos.filter((amiibo) => amiibo.amiiboSeries === series)
    : amiibos;

  return (
    <div className="card-display">
      <div>
        <h2>{series || 'All'}</h2>
      </div>
      <div className="product-cards">
        {showAmiibos.map((amiibo) => <ProductCard key={amiibo.id} amiibo={amiibo} />)}
      </div>
    </div>
  );
}

export default CardDisplay;
