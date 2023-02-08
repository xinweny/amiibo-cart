import React, { useState } from 'react';

import RouteSwitch from './RouteSwitch';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (id, name, price, image, quantity) => {
    setCart((prevCart) => {
      const itemInCart = cart.find((item) => item.id === id);

      if (itemInCart) {
        const index = prevCart.indexOf(itemInCart);
        const newCart = [...prevCart];
        newCart[index].quantity += quantity;

        return newCart;
      }
      const cartItem = {
        id, name, image, price, quantity,
      };
      return [...prevCart, cartItem];
    });
  };

  const deleteFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <RouteSwitch
      cart={cart}
      addToCart={addToCart}
      deleteFromCart={deleteFromCart}
    />
  );
}

export default App;
