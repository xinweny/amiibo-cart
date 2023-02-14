import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import InputQuantity from './InputQuantity';

function CartItem({ item, editQuantity, deleteItem }) {
  const [quantity, setQuantity] = useState({ ...item }.quantity);
  const [showEditQuantity, setShowEditQuantity] = useState(false);

  const { amiibo } = item;

  return (
    <div className="cart-item">
      <div>
        <img src={amiibo.image} alt={amiibo.name} />
        <p>${amiibo.price}</p>
        <Link to={`/shop/amiibo/${item.id}`} state={amiibo}>
          <p>{amiibo.name} ({amiibo.amiiboSeries})</p>
        </Link>
        {(showEditQuantity)
          ? (
            <div>
              <InputQuantity quantity={quantity} setQuantity={setQuantity} />
              <button
                type="button"
                onClick={() => {
                  editQuantity(item.id, quantity);
                  setShowEditQuantity(false);
                }}
              >
                Update
              </button>
            </div>
          )
          : (
            <div>
              <p>{quantity}</p>
              <button type="button" onClick={() => setShowEditQuantity(true)}>
                <img src="#" alt="Show edit quantity" />
              </button>
            </div>
          )}
        <p>${amiibo.price * item.quantity}</p>
      </div>
      <button type="button" onClick={() => deleteItem(item.id)}>x</button>
    </div>
  );
}

export default CartItem;
