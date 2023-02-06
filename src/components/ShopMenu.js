import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ShopMenu({ series }) {
  return (
    <div>
      <ul>
        {series.map((name) => (
          <li key={name}>
            <Link to={`/shop/${encodeURIComponent(name)}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

ShopMenu.propTypes = {
  series: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ShopMenu;
