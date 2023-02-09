import React from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from './ProductCard';

function CardDisplay({ amiibos }) {
  const { series } = useParams();
  console.log(series);
  const showAmiibos = (series)
    ? amiibos.filter((amiibo) => amiibo.amiiboSeries === series)
    : amiibos;

  return (
    <div>
      <h2>{series || 'All'}</h2>
      <div className="product-cards">
        {showAmiibos.map((amiibo) => <ProductCard key={amiibo.id} amiibo={amiibo} />)}
      </div>
    </div>
  );
}

export default CardDisplay;
