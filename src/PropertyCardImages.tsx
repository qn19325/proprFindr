import { useState } from 'react';

import type { Image } from './useFetch';

import './propertyCardImages.css';

interface PropertyCardImagesProps {
  images: Image[];
}

export default function PropertyCardImages({ images }: PropertyCardImagesProps) {
  const [imgIdx, setImgIdx] = useState(0);

  function prevHandler() {
    setImgIdx((iI) => iI - 1);
  }
  function nextHandler() {
    setImgIdx((iI) => iI + 1);
  }

  return (
    <div className="property-card-images-container">
      {imgIdx > 0 && (
        <button className="property-card-images-prev-button" onClick={prevHandler}>
          Prev
        </button>
      )}
      <img
        className="property-card-image"
        src={images[imgIdx]?.srcUrl}
        alt={images[imgIdx]?.caption}
      />
      {imgIdx < images.length - 1 && (
        <button className="property-card-images-next-button" onClick={nextHandler}>
          Next
        </button>
      )}
    </div>
  );
}
