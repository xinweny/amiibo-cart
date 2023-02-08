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
  amiibo: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ProductCard;
