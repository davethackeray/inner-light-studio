(function() {
    function debug(...args) {
        if (window.__DEBUG__) {
            console.log('[Init Debug]', ...args);
        }
    }

    // Initialize React components
    function initComponents() {
        debug('Starting component initialization...');

        // Verify dependencies
        if (!window.React) {
            throw new Error('React not found');
        }
        if (!window.ReactDOM) {
            throw new Error('ReactDOM not found');
        }
        if (!window.VerenaComponents) {
            throw new Error('VerenaComponents not found');
        }

        debug('Dependencies verified:', {
            reactVersion: window.React.version,
            reactDOMVersion: window.ReactDOM.version,
            availableComponents: Object.keys(window.VerenaComponents)
        });

        // Initialize each component
        document.querySelectorAll('[data-component]').forEach(function(el) {
            try {
                const name = el.getAttribute('data-component');
                const propsString = el.getAttribute('data-props');
                const props = propsString ? JSON.parse(propsString) : {};
                
                debug('Initializing component:', {
                    name,
                    elementId: el.id || 'anonymous',
                    props
                });

                const Component = window.VerenaComponents[name];
                if (!Component) {
                    throw new Error(`Component "${name}" not found in registry`);
                }

                const root = window.ReactDOM.createRoot(el);
                root.render(window.React.createElement(Component, props));
                debug(`✓ Mounted ${name}`);
            } catch (err) {
                console.error('Component initialization failed:', err);
                // Add visual feedback for development
                if (window.__DEBUG__) {
                    el.innerHTML = `
                        <div style="border: 2px dashed red; padding: 1rem; margin: 1rem;">
                            <h3 style="color: red;">Component Error</h3>
                            <pre style="white-space: pre-wrap;">${err.message}</pre>
                        </div>
                    `;
                }
            }
        });

        debug('Component initialization complete');
    }

    // Initialize mobile navigation
    function initNavigation() {
        debug('Initializing navigation');
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navToggle.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            document.addEventListener('click', (e) => {
                if (navMenu.classList.contains('active') && !e.target.closest('.site-nav')) {
                    navToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        }

        const currentPath = window.location.pathname;
        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.parentElement.classList.add('active');
            }
        });
        debug('Navigation initialized');
    }

    // Initialize everything when the DOM is ready
    document.addEventListener('DOMContentLoaded', () => {
        try {
            debug('DOM Content Loaded');
            initNavigation();
            // Small delay to ensure all scripts are loaded
            setTimeout(() => {
                initComponents();
            }, 100);
        } catch (err) {
            console.error('Initialization failed:', err);
        }
    });
})();
