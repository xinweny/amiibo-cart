import React, { useState, useEffect } from 'react';

import ShopMenu from './ShopMenu';
import CardDisplay from './CardDisplay';

function Shop() {
  const [series, setSeries] = useState([]);
  const [amiibos, setAmiibos] = useState([]);

  useEffect(() => {
    fetch('https://www.amiiboapi.com/api/amiiboseries/')
      .then((response) => response.json())
      .then((data) => {
        const uniqueSeries = Array.from(new Set(data.amiibo.map((s) => s.name)));
        setSeries(uniqueSeries.map((name) => data.amiibo.find((s) => s.name === name)));
      });
  }, []);

  useEffect(() => {
    fetch('https://www.amiiboapi.com/api/amiibo/')
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setAmiibos([]);
          throw new Error(`${data.code}: ${data.error}`);
        }

        const amiiboData = data.amiibo.map((a) => {
          let price;
          switch (a.type) {
            case 'Figure': price = 15.99; break;
            case 'Card': price = 5.99; break;
            case 'Yarn': price = 39.99; break;
            default: price = 9.99; break;
          }

          return {
            ...a,
            id: a.head + a.tail,
            price,
          };
        });

        setAmiibos(amiiboData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ShopMenu series={series} />
      {(amiibos.length > 0) ? <CardDisplay amiibos={amiibos} /> : ''}
    </div>
  );
}

export default Shop;
