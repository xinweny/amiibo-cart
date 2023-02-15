import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import InputQuantity from './InputQuantity';

import editIcon from '../assets/edit.svg';
import deleteIcon from '../assets/delete.svg';

import '../styles/CartItem.css';

function CartItem({ item, editQuantity, deleteItem }) {
  const [quantity, setQuantity] = useState({ ...item }.quantity);
  const [showEditQuantity, setShowEditQuantity] = useState(false);

  const { amiibo } = item;

  return (
    <div className="cart-item">
      <div>
        <img className="cart-image" src={amiibo.image} alt={amiibo.name} />
      </div>
      <div>
        <Link to={`/shop/amiibo/${item.id}`} state={amiibo}>
          <p>{amiibo.name}</p>
        </Link>
        <p>{amiibo.amiiboSeries}</p>
        {(showEditQuantity)
          ? (
            <div>
              <InputQuantity quantity={quantity} setQuantity={setQuantity} min="1" />
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
              <button className="edit-quantity-btn" type="button" onClick={() => setShowEditQuantity(true)}>
                <img src={editIcon} alt="Show edit quantity" />
              </button>
            </div>
          )}
      </div>
      <div>
        <p>${amiibo.price}</p>
        <p>${amiibo.price * item.quantity}</p>
      </div>
      <button
        className="delete-item-btn"
        type="button"
        onClick={() => deleteItem(item.id)}
      >
        <img src={deleteIcon} alt="Delete item" />
      </button>
    </div>
  );
}

export default CartItem;
