import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Homepage.css';

function Homepage() {
  return (
    <div className="homepage">
      <div>
        <h1>Your one-stop Amiibo shop!</h1>
        <p>Rare and unique Amiibos for a great deal.</p>
        <Link to="/shop">
          <button className="shop-btn" type="button">Shop Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
