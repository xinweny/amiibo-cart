import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../styles/ShopMenu.css';

function ShopMenu({ series, setCurrentSeries }) {
  const [activeLink, setActiveLink] = useState('All');

  useEffect(() => setCurrentSeries({ series: activeLink }), [activeLink]);

  const activeClsName = (active) => (activeLink === active ? 'active' : '');

  return (
    <div className="shop-menu">
      <ul>
        <Link to="/shop" onClick={() => setActiveLink('All')}>
          <li className={activeClsName('All')}>All</li>
        </Link>
        {series.map((s) => (
          <Link
            key={s.key}
            to={`/shop?series=${encodeURIComponent(s.name)}`}
            onClick={() => setActiveLink(s.name)}
          >
            <li className={activeClsName(s.name)} key={s.key}>
              {s.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default ShopMenu;
