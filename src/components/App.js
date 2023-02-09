import React, { useEffect, useState } from 'react';

import RouteSwitch from './RouteSwitch';

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = cart.reduce((currTotal, item) => (
      currTotal + (item.price * item.quantity)
    ), 0);

    setTotal(newTotal);
  }, [cart]);

  const addToCart = (amiibo, quantity) => {
    setCart((prevCart) => {
      const itemInCart = cart.find((item) => item.id === amiibo.id);

      if (itemInCart) {
        const index = prevCart.indexOf(itemInCart);
        const newCart = [...prevCart];
        newCart[index].quantity += quantity;

        return newCart;
      }
      const cartItem = {
        id: amiibo.id,
        name: amiibo.name,
        image: amiibo.image,
        price: amiibo.price,
        quantity,
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
      total={total}
      addToCart={addToCart}
      deleteFromCart={deleteFromCart}
    />
  );
}

export default App;
