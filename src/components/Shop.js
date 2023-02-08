import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';

import ShopMenu from './ShopMenu';
import CardDisplay from './CardDisplay';

function Shop() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetch('https://www.amiiboapi.com/api/gameseries/')
      .then((response) => response.json())
      .then((data) => {
        const allSeries = [...new Set(data.amiibo.map((s) => s.name))];

        setSeries(allSeries.map((s) => ({ id: uniqid(), name: s })));
      });
  }, []);

  return (
    <div>
      <ShopMenu series={series} />
      <CardDisplay />
    </div>
  );
}

export default Shop;
