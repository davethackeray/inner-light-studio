# SCSS Modernization Guide

## Current Warning
```
Deprecation Warning [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.
```

## Required Changes

### 1. Replace @import with @use/@forward

#### Before:
```scss
// main.scss
@import "variables";
@import "base";
@import "components/gallery";
```

#### After:
```scss
// main.scss
@use "variables";
@use "base";
@use "components/gallery";

// To access variables/mixins:
.element {
  color: variables.$primary-color;
}
```

### 2. Update Directory Structure
```
_sass/
├── abstracts/
│   ├── _variables.scss   
│   ├── _mixins.scss     
│   └── _index.scss      # @forward all abstracts
├── base/
│   ├── _reset.scss
│   ├── _typography.scss
│   └── _index.scss      # @forward all base styles
├── components/
│   ├── _gallery.scss
│   ├── _buttons.scss
│   └── _index.scss      # @forward all components
└── main.scss            # @use all modules
```

### 3. Module System Setup

#### abstracts/_index.scss:
```scss
@forward 'variables';
@forward 'mixins';
```

#### base/_index.scss:
```scss
@forward 'reset';
@forward 'typography';
```

#### components/_index.scss:
```scss
@forward 'gallery';
@forward 'buttons';
```

#### main.scss:
```scss
@use 'abstracts';
@use 'base';
@use 'components';

// Access variables like this:
.element {
  color: abstracts.$primary-color;
}
```

## Implementation Steps

1. **Audit Current Files**
   ```bash
   find ./_sass -type f -name "*.scss" -exec grep -l "@import" {} \;
   ```

2. **Create Namespaces**
   - Group related variables/mixins
   - Create index files
   - Plan namespace hierarchy

3. **Update Files Systematically**
   - Start with variables/mixins
   - Then base styles
   - Finally components
   - Test each section before moving on

4. **Jekyll Integration**
   - Update `assets/css/styles.scss`:
   ```scss
   ---
   ---
   @use "main";
   ```

5. **Storybook Integration**
   - Update `.storybook/preview.js`:
   ```js
   import '../_sass/main.scss';
   ```

## Common Patterns

### 1. Sharing Variables
```scss
// _sass/abstracts/_variables.scss
@use "sass:color";

// Colors
$primary-color: #4a90e2;
$primary-light: color.scale($primary-color, $lightness: 20%);

// Export all variables
@forward "variables" show $primary-color, $primary-light;
```

### 2. Mixins with Modern Syntax
```scss
// _sass/abstracts/_mixins.scss
@use "sass:map";
@use "./variables" as vars;

@mixin responsive($breakpoint) {
  @if map.has-key(vars.$breakpoints, $breakpoint) {
    @media (min-width: map.get(vars.$breakpoints, $breakpoint)) {
      @content;
    }
  }
}
```

### 3. Component Organization
```scss
// _sass/components/_gallery.scss
@use "../abstracts" as *;

.gallery {
  display: grid;
  gap: $spacing-md;
  
  @include responsive("tablet") {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

## Testing Changes

1. **Visual Regression**
   - Take screenshots before/after
   - Compare critical components
   - Check responsive breakpoints

2. **Performance**
   - Monitor CSS bundle size
   - Check compilation time
   - Validate selector specificity

3. **Browser Testing**
   - Test in Chrome, Firefox, Safari
   - Verify mobile layouts
   - Check print stylesheets

## Rollback Plan

1. Keep old files with `.old` extension
2. Document all changes in Git commits
3. Create test branch first
4. Have before/after screenshots
5. Maintain old build for comparison

## Future Maintenance

1. **Documentation**
   - Comment all `@use` statements
   - Document namespace patterns
   - Keep module index up to date

2. **Code Reviews**
   - Check for deprecated `@import`
   - Verify namespace usage
   - Validate module organization

3. **Updates**
   - Monitor Sass releases
   - Check for new features
   - Update tooling as needed