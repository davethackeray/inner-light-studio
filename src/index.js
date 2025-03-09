// Entry point for React components
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Import components
import { MediaPlayer } from '@components/Common/MediaPlayer';
import { NewsletterSignup } from '@components/Common/NewsletterSignup';
import { EnhancedGallery } from '@components/Art/EnhancedGallery';

// Initialize components when DOM elements are present
document.addEventListener('DOMContentLoaded', () => {
  // Media Player
  const mediaPlayerElements = document.querySelectorAll('[data-component="media-player"]');
  mediaPlayerElements.forEach(element => {
    const root = createRoot(element);
    root.render(
      <StrictMode>
        <MediaPlayer 
          src={element.dataset.src}
          type={element.dataset.type}
          title={element.dataset.title}
        />
      </StrictMode>
    );
  });

  // Newsletter Signup
  const newsletterElements = document.querySelectorAll('[data-component="newsletter-signup"]');
  newsletterElements.forEach(element => {
    const root = createRoot(element);
    root.render(
      <StrictMode>
        <NewsletterSignup 
          location={element.dataset.location}
          theme={element.dataset.theme}
        />
      </StrictMode>
    );
  });

  // Enhanced Gallery
  const galleryElements = document.querySelectorAll('[data-component="enhanced-gallery"]');
  galleryElements.forEach(element => {
    const images = JSON.parse(element.dataset.images || '[]');
    const root = createRoot(element);
    root.render(
      <StrictMode>
        <EnhancedGallery 
          images={images}
          layout={element.dataset.layout}
          columns={parseInt(element.dataset.columns, 10)}
        />
      </StrictMode>
    );
  });
});
