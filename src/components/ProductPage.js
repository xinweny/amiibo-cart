import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import uniqid from 'uniqid';

import UsageTable from './UsageTable';
import ReleaseInfo from './ReleaseInfo';
import InputQuantity from './InputQuantity';
import ImageShowcase from './ImageShowcase';

import nSeal from '../assets/nintendo-seal.png';

import '../styles/ProductPage.css';

function ProductPage({ addToCart }) {
  const [quantity, setQuantity] = useState(1);

  const { amiibo } = useLocation().state;

  return (
    <div className="product-page">
      <ImageShowcase images={[
        { id: uniqid(), src: amiibo.image, alt: amiibo.name },
        { id: uniqid(), src: nSeal, alt: 'Nintendo Seal of Quality' },
      ]}
      />
      <div className="product-details">
        <p>{amiibo.amiiboSeries}</p>
        <h2 className="product-name">{amiibo.name}</h2>
        <h2 className="text-right">${amiibo.price}</h2>
        <div className="quantity">
          <label htmlFor="page-input">Quantity</label>
          <InputQuantity id="page-input" quantity={quantity} setQuantity={setQuantity} />
        </div>
        <button
          className="add-to-cart-btn"
          type="button"
          onClick={() => addToCart(amiibo, quantity)}
        >
          Add To Cart
        </button>
      </div>
      <div className="usage-section">
        <h2>Game Usage</h2>
        <UsageTable
          usageData={{
            Switch: amiibo.gamesSwitch,
            '3DS': amiibo.games3DS,
            'Wii U': amiibo.gamesWiiU,
          }}
        />
      </div>
      <div className="releases-section">
        <h2>Releases</h2>
        <ReleaseInfo releases={amiibo.release} />
      </div>
    </div>
  );
}

export default ProductPage;
