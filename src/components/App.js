import React, { useEffect, useState } from 'react';

import RouteSwitch from './RouteSwitch';

import '../styles/App.css';

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
      const index = prevCart.findIndex((item) => item.id === amiibo.id);

      if (index !== -1) {
        return prevCart.map((item, i) => (
          (i === index) ? { ...item, quantity: item.quantity + quantity } : item
        ));
      }

      const cartItem = {
        id: amiibo.id,
        name: amiibo.name,
        image: amiibo.image,
        price: amiibo.price,
        series: amiibo.amiiboSeries,
        quantity,
      };

      return [...prevCart, cartItem];
    });
  };

  const editQuantityInCart = (id, quantity) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      const index = newCart.findIndex((item) => item.id === id);
      newCart[index].quantity = quantity;

      return newCart;
    });
  };

  const deleteFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <RouteSwitch
        cart={cart}
        total={total}
        addToCart={addToCart}
        deleteFromCart={deleteFromCart}
        editQuantityInCart={editQuantityInCart}
      />
    </div>
  );
}

export default App;
