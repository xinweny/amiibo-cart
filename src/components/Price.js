import React from 'react';

function Price({ price }) {
  const splitPrice = price.toString().split('.');

  return (
    <div className="price">
      <p className="dollars">${splitPrice[0]}</p>
      <p className="cents">{splitPrice[1]}</p>
    </div>
  );
}

export default Price;
