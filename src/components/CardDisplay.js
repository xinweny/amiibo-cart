import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard';

function CardDisplay({ amiibos }) {
  const series = useLocation().state;
  const showAmiibos = (series)
    ? amiibos.filter((amiibo) => amiibo.amiiboSeries === series.name)
    : amiibos;

  return (
    <div>
      {showAmiibos.map((amiibo) => <ProductCard key={amiibo.id} amiibo={amiibo} />)}
    </div>
  );
}

CardDisplay.propTypes = {
  amiibos: PropTypes.arrayOf(PropTypes.shape({
    amiiboSeries: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    head: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    release: PropTypes.objectOf(PropTypes.string),
    tail: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  })).isRequired,
};

export default CardDisplay;
