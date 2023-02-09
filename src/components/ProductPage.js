import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import UsageTable from './UsageTable';
import ReleaseInfo from './ReleaseInfo';
import InputQuantity from './InputQuantity';

function ProductPage({ addToCart }) {
  const [quantity, setQuantity] = useState(1);

  const amiibo = (useLocation().state)
    ? { ...useLocation().state }
    : JSON.parse(localStorage.getItem(useParams().id));

  amiibo.price = Number(amiibo.price);

  return (
    <div className="product-page">
      <h2>{amiibo.name}</h2>
      <img src={amiibo.image} alt={amiibo.name} />
      <div>
        <InputQuantity quantity={quantity} setQuantity={setQuantity} />
        <button type="button" onClick={() => addToCart(amiibo, quantity)}>
          Add To Cart
        </button>
      </div>
      <div>
        <h3>Release Date</h3>
        <ReleaseInfo releases={amiibo.release} />
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
