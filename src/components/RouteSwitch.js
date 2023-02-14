import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import NavBar from './NavBar';
import Homepage from './Homepage';
import Shop from './Shop';
import ProductPage from './ProductPage';
import CheckoutPage from './CheckoutPage';
import ErrorPage from './ErrorPage';
import Footer from './Footer';

function RouteSwitch({
  cart,
  addToCart,
  deleteFromCart,
  editQuantityInCart,
  total,
}) {
  return (
    <BrowserRouter>
      <NavBar cart={cart} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/amiibo/:id" element={<ProductPage addToCart={addToCart} />} />
          <Route
            path="/checkout"
            element={
              (
                <CheckoutPage
                  cart={cart}
                  total={total}
                  deleteFromCart={deleteFromCart}
                  editQuantityInCart={editQuantityInCart}
                />
              )
            }
          />
          <Route path="*" element={<ErrorPage code="404" message="Page not found" />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default RouteSwitch;
