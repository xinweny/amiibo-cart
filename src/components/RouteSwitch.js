import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './NavBar';
import Homepage from './Homepage';
import Shop from './Shop';
import CardDisplay from './CardDisplay';
import Footer from './Footer';

function RouteSwitch() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />}>
          <Route path=":series" element={<CardDisplay />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RouteSwitch;
