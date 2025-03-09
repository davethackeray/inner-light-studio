# Verena's Website Style Guide

## Design System Components

### Common Components

#### ArtyButton
- Primary variant (pink) for art-related actions
- Movement variant (turquoise) for workshop/class interactions
- Spiritual variant (gold) for meditation-related actions
- Size options: small, medium, large
- Hover animations and lift effect

### Section-Specific Components

#### Art Section (ArtyGallery)
- Responsive grid layout
- Smooth hover transitions
- Image overlays with title and description
- Loading states with shimmer effects

#### Movement Section (MovementShowcase)
- Video preview support
- Workshop details display
- Booking integration
- Tag system for categorization
- Price and duration indicators

#### Spiritual Section (SpiritualMeditations)
- Featured meditation cards
- Quote displays
- Session duration indicators
- Facilitator information
- Tag categorization

## Color Palette

```scss
$color-primary: #f449a8;    // Vibrant pink for artistic accents
$color-secondary: #6b4e71;  // Deep purple for depth
$color-tertiary: #ffd700;   // Gold for spiritual elements
$color-accent: #00a6b5;     // Turquoise for movement elements
$color-background: #f5f0eb; // Warm off-white
$color-text: #2c2c2c;       // Soft black
```

## Typography

```scss
$font-primary: 'Cormorant Garamond', serif;    // Headings
$font-secondary: 'Montserrat', sans-serif;      // Body text
```

## Spacing

```scss
$spacing-xs: 0.25rem;
$spacing-sm: 0.5rem;
$spacing-md: 1rem;
$spacing-lg: 2rem;
$spacing-xl: 4rem;
```

## Animations

- Hover lift effect on interactive elements
- Smooth transitions (0.3s ease)
- Loading state shimmer effects
- Gentle pulse animations for spiritual elements

## Responsive Design

- Desktop-first approach
- Breakpoints:
  - Large: 1200px+
  - Medium: 768px - 1199px
  - Small: < 768px
- Fluid typography scaling
- Grid-based layouts that adapt to screen size

## Best Practices

1. Maintain consistent use of color variants across sections
2. Use animations sparingly for meaningful interactions
3. Ensure proper contrast for accessibility
4. Implement loading states for better UX
5. Follow BEM naming convention for CSS classes
6. Keep components modular and reusable

## Implementation Notes

- Components built with React in Storybook
- SCSS modules for styling
- Consistent file structure:
  ```
  ComponentName/
  ├── ComponentName.jsx
  ├── ComponentName.scss
  └── ComponentName.stories.jsx
  ```
