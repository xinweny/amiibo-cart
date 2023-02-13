import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import UsageTable from './UsageTable';
import ReleaseInfo from './ReleaseInfo';
import InputQuantity from './InputQuantity';

import '../styles/ProductPage.css';

function ProductPage({ addToCart }) {
  const [quantity, setQuantity] = useState(1);

  const { amiibo } = useLocation().state;

  return (
    <div className="product-page">
      <h2>{amiibo.name}</h2>
      <div className="main-info">
        <img src={amiibo.image} alt={amiibo.name} />
        <div>
          <div>
            <h2>${amiibo.price}</h2>
            <InputQuantity quantity={quantity} setQuantity={setQuantity} />
            <button type="button" onClick={() => addToCart(amiibo, quantity)}>
              Add To Cart
            </button>
          </div>
          <div>
            <p>Amiibo series: {amiibo.amiiboSeries}</p>
            <p>Character: {amiibo.character}</p>
            <p>Game series: {amiibo.gameSeries}</p>
          </div>
          <div>
            <h3>Release Dates</h3>
            <ReleaseInfo releases={amiibo.release} />
          </div>
        </div>
      </div>
      <div>
        <h2>Game Usage</h2>
        <UsageTable
          usageData={{
            Switch: amiibo.gamesSwitch,
            '3DS': amiibo.games3DS,
            'Wii U': amiibo.gamesWiiU,
          }}
        />
      </div>
    </div>
  );
}

export default ProductPage;
