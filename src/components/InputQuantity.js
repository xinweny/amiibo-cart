import React from 'react';

function InputQuantity({ quantity, setQuantity }) {
  const changeQuantity = (value) => {
    const re = /^[0-9\b]+$/;
    if (value === '' || re.test(value)) setQuantity(Number(value));
  };

  return (
    <input
      value={quantity}
      type="number"
      min="0"
      onChange={(e) => changeQuantity(e.target.value)}
    />
  );
}

export default InputQuantity;
