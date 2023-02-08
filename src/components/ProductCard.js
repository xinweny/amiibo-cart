import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProductCard({ amiibo, id }) {
  return (
    <Link to={`/amiibo/${id}`} state={amiibo}>
      <div className="product-card">
        <img src={amiibo.image} alt={amiibo.name} />
        <p>{amiibo.name}</p>
      </div>
    </Link>
  );
}

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  amiibo: PropTypes.shape({
    amiiboSeries: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    head: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    release: PropTypes.objectOf(PropTypes.string),
    tail: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
