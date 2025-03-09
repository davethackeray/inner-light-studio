import React from 'react';
import './ArtyGallery.scss';

export const ArtyGallery = ({ 
  images = [],
  columns = 3,
  gap = '1rem',
  onImageClick,
  className = ''
}) => {
  return (
    <div 
      className={`arty-gallery ${className}`}
      style={{ 
        '--columns': columns,
        '--gap': gap 
      }}
    >
      {images.map((image, index) => (
        <div 
          key={image.id || index}
          className="arty-gallery__item"
          onClick={() => onImageClick?.(image, index)}
        >
          <img 
            src={image.src} 
            alt={image.alt || 'Abstract artwork'} 
            className="arty-gallery__image"
            loading="lazy"
          />
          {image.title && (
            <div className="arty-gallery__overlay">
              <h3 className="arty-gallery__title">{image.title}</h3>
              {image.description && (
                <p className="arty-gallery__description">{image.description}</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

ArtyGallery.displayName = 'ArtyGallery';

export default ArtyGallery;
