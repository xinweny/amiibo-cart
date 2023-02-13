import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/ShopMenu.css';

function ShopMenu({ series }) {
  return (
    <div className="shop-menu">
      <ul>
        {series.map((s) => (
          <li key={s.key}>
            <Link to={`/shop/series/${encodeURIComponent(s.name)}`}>{s.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShopMenu;
