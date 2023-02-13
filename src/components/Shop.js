import React, { useState, useEffect } from 'react';

import ShopMenu from './ShopMenu';
import CardDisplay from './CardDisplay';
import LoadingPage from './LoadingPage';
import ErrorPage from './ErrorPage';

import '../styles/Shop.css';

function Shop() {
  const [series, setSeries] = useState([]);
  const [amiibos, setAmiibos] = useState([]);
  const [isLoaded, setIsLoaded] = useState({
    series: false,
    amiibos: false,
  });
  const [hasError, setHasError] = useState(false);

  useEffect(() => setHasError(false), []);

  useEffect(() => {
    fetch('https://www.amiiboapi.com/api/amiiboseries/')
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          const errObj = { ...data };
          errObj.displayMsg = 'Something went wrong. Please try again.';
          throw errObj;
        }

        const uniqueSeries = Array.from(new Set(data.amiibo.map((s) => s.name)));
        setSeries(uniqueSeries.map((name) => data.amiibo.find((s) => s.name === name)));
      })
      .catch((errObj) => setHasError(errObj));
  }, []);

  useEffect(() => {
    fetch('https://www.amiiboapi.com/api/amiibo/?showusage')
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          const errObj = { ...data };
          errObj.displayMsg = 'Something went wrong. Please try again.';
          throw errObj;
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
      .catch((errObj) => setHasError(errObj));
  }, []);

  useEffect(() => setIsLoaded((prev) => ({ ...prev, series: true })), [series]);

  useEffect(() => setIsLoaded((prev) => ({ ...prev, amiibos: true })), [amiibos]);

  if (hasError) return <ErrorPage code={hasError.code} message={hasError.displayMsg} />;

  if (Object.values(isLoaded).every((loaded) => loaded === true)) {
    return (
      <div className="shop">
        <ShopMenu series={series} />
        {(amiibos.length > 0) ? <CardDisplay amiibos={amiibos} /> : ''}
      </div>
    );
  }

  return <LoadingPage />;
}

export default Shop;
