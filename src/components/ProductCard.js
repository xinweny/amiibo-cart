import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProductCard({ amiibo }) {
  return (
    <Link
      className="product-card"
      to={`/amiibo/${amiibo.id}`}
      state={amiibo}
      onClick={() => localStorage.setItem(amiibo.id, JSON.stringify(amiibo))}
    >
      <div>
        <img src={amiibo.image} alt={amiibo.name} />
        <p>{amiibo.name}</p>
        <p>${amiibo.price}</p>
      </div>
    </Link>
  );
}

ProductCard.propTypes = {
  amiibo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    amiiboSeries: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    head: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    release: PropTypes.objectOf(PropTypes.string).isRequired,
    tail: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
