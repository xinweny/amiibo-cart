import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ShopMenu({ series }) {
  return (
    <div>
      <ul>
        {series.map((s) => (
          <li key={s.key}>
            <Link to={`/shop/${encodeURIComponent(s.name)}`}>{s.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

ShopMenu.propTypes = {
  series: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)).isRequired,
};

export default ShopMenu;
