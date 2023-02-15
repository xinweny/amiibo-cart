import React from 'react';

function InputQuantity({
  quantity,
  setQuantity,
  id,
  min,
  inputRef,
}) {
  const changeQuantity = (value) => {
    const re = /^[0-9\b]+$/;
    if (value === '' || re.test(value)) {
      setQuantity((min && value === '') ? Number(min) : Number(value));
    }
  };

  return (
    <input
      id={id}
      value={quantity}
      type="number"
      min={min || 0}
      onChange={(e) => changeQuantity(e.target.value)}
      ref={inputRef}
    />
  );
}

export default InputQuantity;
