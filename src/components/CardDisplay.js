import React from 'react';

import ProductCard from './ProductCard';

import '../styles/CardDisplay.css';

function CardDisplay({ searchParams, amiibos }) {
  const series = searchParams.get('series');
  const query = searchParams.get('query');

  const filterAmiibos = (s, q) => {
    if (s) {
      return (series === 'All')
        ? amiibos
        : amiibos.filter((amiibo) => amiibo.amiiboSeries === series);
    }

    return amiibos.filter((amiibo) => amiibo.name.toLowerCase().includes(q.toLowerCase()));
  };

  const showAmiibos = filterAmiibos(series, query);

  return (
    <div className="card-display">
      <h2>{series
        ? `${series} (${showAmiibos.length})`.toUpperCase()
        : `Showing ${showAmiibos.length} results for '${query}'`}
      </h2>
      <div className="product-cards">
        {showAmiibos.map((a) => <ProductCard key={a.id} amiibo={a} />)}
      </div>
    </div>
  );
}

export default CardDisplay;
