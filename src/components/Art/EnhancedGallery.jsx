import React, { useState } from 'react';
import './EnhancedGallery.scss';

const EnhancedGallery = ({
  images = [],
  columns = 3,
  gap = '1rem',
  onImageClick,
  className = ''
}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    if (onImageClick) onImageClick(image, index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  // Render placeholder if no images
  if (!images || images.length === 0) {
    return (
      <div className={`enhanced-gallery ${className}`}>
        <p>No images available</p>
      </div>
    );
  }

  return (
    <div className={`enhanced-gallery ${className}`}>
      <div
        className="enhanced-gallery__container"
        style={{ '--columns': columns, '--gap': gap }}
      >
        {images.map((image, index) => (
          <div
            key={image.id || index}
            className="enhanced-gallery__item"
            onClick={() => handleImageClick(image, index)}
          >
            <img
              src={image.src}
              alt={image.alt || 'Gallery image'}
              className="enhanced-gallery__image"
              loading="lazy"
            />
            {image.title && <h3 className="enhanced-gallery__title">{image.title}</h3>}
            {image.description && <p className="enhanced-gallery__description">{image.description}</p>}
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="enhanced-gallery__lightbox" onClick={closeLightbox}>
          <button className="enhanced-gallery__close" onClick={closeLightbox}>×</button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt || 'Gallery image'}
            className="enhanced-gallery__lightbox-image"
          />
          {selectedImage.title && (
            <div className="enhanced-gallery__lightbox-info">
              <h3>{selectedImage.title}</h3>
              {selectedImage.description && <p>{selectedImage.description}</p>}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export { EnhancedGallery };
export default EnhancedGallery;
