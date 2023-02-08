import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard';

function CardDisplay({ amiibos }) {
  const { series } = useParams();
  const showAmiibos = (series)
    ? amiibos.filter((amiibo) => amiibo.amiiboSeries === series)
    : amiibos;

  return (
    <div>
      {showAmiibos.map((amiibo) => <ProductCard key={amiibo.id} amiibo={amiibo} />)}
    </div>
  );
}

CardDisplay.defaultProps = {
  amiibos: [],
};

CardDisplay.propTypes = {
  amiibos: PropTypes.arrayOf(ProductCard.propTypes),
};

export default CardDisplay;
