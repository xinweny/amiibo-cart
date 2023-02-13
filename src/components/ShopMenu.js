import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../styles/ShopMenu.css';

function ShopMenu({ series, setCurrentSeries }) {
  const [activeLink, setActiveLink] = useState('All');

  const activeClsName = (active) => (activeLink === active ? 'active' : '');

  useEffect(() => setCurrentSeries(activeLink), [activeLink]);

  return (
    <div className="shop-menu">
      <ul>
        <li className={activeClsName('All')}>
          <Link to="/shop" onClick={() => setActiveLink('All')}>
            All
          </Link>
        </li>
        {series.map((s) => (
          <li className={activeClsName(s.name)} key={s.key}>
            <Link
              to={`/shop/series/${encodeURIComponent(s.name)}`}
              onClick={() => setActiveLink(s.name)}
            >{s.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShopMenu;
