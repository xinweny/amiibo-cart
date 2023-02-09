import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './NavBar';
import Homepage from './Homepage';
import Shop from './Shop';
import CardDisplay from './CardDisplay';
import ProductPage from './ProductPage';
import CheckoutPage from './CheckoutPage';
import Footer from './Footer';

function RouteSwitch({
  cart,
  addToCart,
  deleteFromCart,
  total,
}) {
  return (
    <BrowserRouter>
      <NavBar cart={cart} total={total} deleteFromCart={deleteFromCart} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />}>
          <Route exact path="/shop" element={<CardDisplay />} />
          <Route path="/shop/:series" element={<CardDisplay />} />
        </Route>
        <Route path="/amiibo/:id" element={<ProductPage addToCart={addToCart} />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RouteSwitch;
