import React, { useState, useEffect } from 'react';

import ShopMenu from './ShopMenu';
import CardDisplay from './CardDisplay';

function Shop() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetch('https://www.amiiboapi.com/api/amiiboseries/')
      .then((response) => response.json())
      .then((data) => {
        setSeries(data.amiibo);
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
