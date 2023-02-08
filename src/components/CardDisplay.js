import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CardDisplay() {
  const series = useParams().series || null;
  const [amiibos, setAmiibos] = useState([]);

  useEffect(() => {
    const query = (series ? `?amiiboSeries=${series}` : '');

    fetch(`https://www.amiiboapi.com/api/amiibo/${query}`)
      .then((response) => response.json())
      .then((data) => {
        setAmiibos((prevState) => [prevState, ...data.amiibo]);
      });
  });

  return (
    <div>
      {amiibos.map((amiibo) => <p key={amiibo.head + amiibo.tail}>{amiibo.name}</p>)}
    </div>
  );
}

export default CardDisplay;
