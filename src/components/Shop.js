import React, { useState, useEffect } from 'react';

import ShopMenu from './ShopMenu';
import CardDisplay from './CardDisplay';

function Shop() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetch('https://www.amiiboapi.com/api/amiiboseries/')
      .then((response) => response.json())
      .then((data) => {
        const uniqueSeries = Array.from(new Set(data.amiibo.map((s) => s.name)));
        setSeries(uniqueSeries.map((name) => data.amiibo.find((s) => s.name === name)));
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
