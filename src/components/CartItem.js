import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import InputQuantity from './InputQuantity';

import editIcon from '../assets/edit.svg';
import deleteIcon from '../assets/delete.svg';

import '../styles/CartItem.css';

function CartItem({ item, editQuantity, deleteItem }) {
  const [quantity, setQuantity] = useState({ ...item }.quantity);
  const [showEditQuantity, setShowEditQuantity] = useState(false);
  let inputRef = useRef(null);

  const { amiibo } = item;

  useEffect(() => { if (showEditQuantity) inputRef.focus(); }, [showEditQuantity]);

  return (
    <div className="cart-item">
      <Link to={`/amiibo/${item.id}`} state={{ amiibo }}>
        <div className="cart-image-container">
          <img src={amiibo.image} alt={amiibo.name} />
        </div>
      </Link>
      <div className="item-details">
        <Link to={`/amiibo/${item.id}`} state={{ amiibo }}>
          <p className="name">{amiibo.name}</p>
        </Link>
        <p className="series">{amiibo.amiiboSeries}</p>
        <p className="type">Type: {amiibo.type.toUpperCase()}</p>
        <div className="quantity">
          <label htmlFor="quantity">Qty:</label>
          {(showEditQuantity)
            ? (
              <>
                <InputQuantity
                  id="cart-quantity"
                  quantity={quantity}
                  setQuantity={setQuantity}
                  min="1"
                  inputRef={(el) => { inputRef = el; }}
                />
                <button
                  type="button"
                  onClick={() => {
                    editQuantity(item.id, quantity);
                    setShowEditQuantity(false);
                  }}
                >
                  Update
                </button>
              </>
            )
            : (
              <>
                <p>{quantity}</p>
                <button
                  className="edit-quantity-btn"
                  type="button"
                  onClick={() => setShowEditQuantity(true)}
                >
                  <img src={editIcon} alt="Show edit quantity" />
                </button>
              </>
            )}
        </div>
      </div>
      <div className="item-price">
        <p>{item.quantity}x</p>
        <p>${amiibo.price}</p>
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
