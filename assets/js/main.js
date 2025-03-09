// Main JavaScript initialization
document.addEventListener('DOMContentLoaded', function() {
  // Check for required dependencies
  if (!window.React || !window.ReactDOM) {
    console.error('Missing React dependencies');
    return;
  }

  const componentInitializers = {
    // Initialize media players
    initMediaPlayers() {
      document.querySelectorAll('.media-player').forEach(el => {
        if (!el._initialized) {
          const audio = el.dataset.audio;
          const title = el.dataset.title;
          new MediaPlayer({ target: el, props: { audio, title } });
          el._initialized = true;
        }
      });
    },

    // Initialize gallery components
    initGalleries() {
      document.querySelectorAll('.enhanced-gallery').forEach(el => {
        if (!el._initialized && el.dataset.images) {
          try {
            const images = JSON.parse(el.dataset.images);
            new EnhancedGallery({ target: el, props: { images } });
            el._initialized = true;
          } catch (err) {
            console.error('Failed to initialize gallery:', err);
          }
        }
      });
    },

    // Initialize related content sections
    initRelatedContent() {
      document.querySelectorAll('.related-content').forEach(el => {
        if (!el._initialized && el.dataset.relationships) {
          try {
            const relationships = JSON.parse(el.dataset.relationships);
            new RelatedContent({ target: el, props: { relationships } });
            el._initialized = true;
          } catch (err) {
            console.error('Failed to initialize related content:', err);
          }
        }
      });
    },

    // Initialize buttons
    initButtons() {
      document.querySelectorAll('.arty-button').forEach(el => {
        if (!el._initialized) {
          new ArtyButton({
            target: el,
            props: {
              variant: el.dataset.variant || 'default'
            }
          });
          el._initialized = true;
        }
      });
    },

    // Initialize newsletter signup forms
    initNewsletterSignup() {
      document.querySelectorAll('.newsletter-signup').forEach(el => {
        if (!el._initialized) {
          new NewsletterSignup({
            target: el,
            props: {
              context: el.dataset.context || 'general'
            }
          });
          el._initialized = true;
        }
      });
    }
  };

  // Initialize all components
  function initializeComponents() {
    Object.values(componentInitializers).forEach(initializer => {
      try {
        initializer();
      } catch (err) {
        console.error('Component initialization error:', err);
      }
    });
  }

  // Initial component initialization
  initializeComponents();

  // Re-initialize components when content changes (e.g., after AJAX updates)
  const observer = new MutationObserver(() => {
    initializeComponents();
  });

  // Observe the entire document for content changes
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});
