import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './NavBar';
import Homepage from './Homepage';
import Shop from './Shop';
import Footer from './Footer';

function RouteSwitch() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RouteSwitch;
