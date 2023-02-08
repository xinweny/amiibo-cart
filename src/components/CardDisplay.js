import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from './ProductCard';

function CardDisplay() {
  const series = useParams().series || null;
  const [amiibos, setAmiibos] = useState([]);

  useEffect(() => {
    const query = (series ? `?amiiboSeries=${series}` : '');

    fetch(`https://www.amiiboapi.com/api/amiibo/${query}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setAmiibos([]);
          throw new Error(`${data.code}: ${data.error}`);
        }

        setAmiibos(data.amiibo);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [series]);

  return (
    <div>
      {(amiibos.length > 0)
        ? amiibos.map((amiibo) => {
          const id = String(amiibo.head + amiibo.tail);

          return <ProductCard key={id} amiibo={amiibo} id={id} />;
        })
        : <p>No amiibos found</p>}
    </div>
  );
}

export default CardDisplay;
