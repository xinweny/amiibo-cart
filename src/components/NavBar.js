import React from 'react';

import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="nav-bar">
      <h1>Amiibo Cart</h1>
      <ul className="links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
      </ul>
    </div>
  );
}

export default NavBar;
