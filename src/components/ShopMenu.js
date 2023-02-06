import React from 'react';
import PropTypes from 'prop-types';

function ShopMenu({ series }) {
  return (
    <div>
      <ul>
        {series.map((s) => <li>{s}</li>)}
      </ul>
    </div>
  );
}

ShopMenu.propTypes = {
  series: PropTypes.arrayOf.isRequired,
};

export default ShopMenu;
