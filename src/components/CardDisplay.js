import React, { useState, useEffect } from 'react';

import ProductCard from './ProductCard';

import '../styles/CardDisplay.css';

function CardDisplay({ searchParams, amiibos }) {
  const [showAmiibos, setShowAmiibos] = useState([]);

  const series = searchParams.get('series');
  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      setShowAmiibos(
        amiibos.filter((amiibo) => amiibo.name.toLowerCase().includes(query.toLowerCase())),
      );
    } else if (series && series !== 'All') {
      setShowAmiibos(amiibos.filter((amiibo) => amiibo.amiiboSeries === series));
    } else {
      setShowAmiibos([...amiibos]);
    }
  }, [series, query]);

  return (
    <div className="card-display">
      <h2>{series
        ? `${series} (${showAmiibos.length})`.toUpperCase()
        : `Showing ${showAmiibos.length} result${showAmiibos.length === 1 ? '' : 's'} for '${query}'`}
      </h2>
      <div className="product-cards">
        {showAmiibos.map((a) => <ProductCard key={a.id} amiibo={a} />)}
      </div>
    </div>
  );
}

export default CardDisplay;
