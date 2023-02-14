import React, { useState } from 'react';

import '../styles/ImageShowcase.css';

function ImageShowcase({ images }) {
  const [currentImg, setCurrentImg] = useState([...images][0]);

  return (
    <div className="image-showcase">
      <div className="big-container">
        <img className="current-image" src={currentImg.src} alt={currentImg.alt} />
      </div>
      <div className="image-previews">
        {images.map((img) => (
          <button key={img.id} type="button" onClick={() => setCurrentImg(img)}>
            <img
              className={`image-preview ${currentImg.id === img.id ? 'current' : ''}`}
              src={img.src}
              alt={img.alt}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ImageShowcase;
