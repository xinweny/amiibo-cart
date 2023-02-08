import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './NavBar';
import Homepage from './Homepage';
import Shop from './Shop';
import CardDisplay from './CardDisplay';
import ProductPage from './ProductPage';
import Footer from './Footer';

function RouteSwitch() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />}>
          <Route exact path="/shop/all" element={<CardDisplay />} />
          <Route path="/shop/:series" element={<CardDisplay />} />
        </Route>
        <Route path="/amiibo/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RouteSwitch;
