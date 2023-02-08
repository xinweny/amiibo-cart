import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import NavBar from './NavBar';
import Homepage from './Homepage';
import Shop from './Shop';
import CardDisplay from './CardDisplay';
import ProductPage from './ProductPage';
import Footer from './Footer';

function RouteSwitch({ cart, addToCart, deleteFromCart }) {
  return (
    <BrowserRouter>
      <NavBar cart={cart} deleteFromCart={deleteFromCart} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />}>
          <Route exact path="/shop" element={<CardDisplay />} />
          <Route path="/shop/:series" element={<CardDisplay />} />
        </Route>
        <Route
          path="/amiibo/:id"
          element={<ProductPage addToCart={addToCart} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

RouteSwitch.propTypes = {
  cart: PropTypes.arrayOf(NavBar.propTypes),
  addToCart: PropTypes.func.isRequired,
  deleteFromCart: PropTypes.func.isRequired,
};

RouteSwitch.defaultProps = {
  cart: [],
};

export default RouteSwitch;
