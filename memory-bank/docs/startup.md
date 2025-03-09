# Development Environment Startup Guide

## Prerequisites
1. Ensure Ruby >= 2.7.0 is installed
2. Ensure Node.js >= 18 is installed
3. Ensure Bundler is installed (`gem install bundler`)
4. Ensure all dependencies are installed:
   ```bash
   bundle install     # Install Ruby/Jekyll dependencies
   npm install       # Install Node/Storybook dependencies
   ```

## Starting the Development Environment

### 1. Start Jekyll (Terminal 1)
```bash
bundle exec jekyll serve --livereload
```
- This will start Jekyll at http://localhost:4000
- Livereload will automatically refresh your browser when files change
- The _site directory will contain the built site

### 2. Start Storybook (Terminal 2)
```bash
npm run storybook
```
- This will start Storybook at http://localhost:6006
- Component changes will trigger hot reloading

## Important Notes

### Asset Pipeline
- Images & static files go in `/assets/`
- React components go in `/src/components/`
- SCSS files:
  - Jekyll: `/_sass/` and `/assets/css/`
  - Storybook: `/src/styles/`

### Common Issues & Solutions

1. **Jekyll/Storybook Port Conflicts**
   - Jekyll runs on port 4000 by default
   - Storybook runs on port 6006 by default
   - If needed, you can modify these in `_config.yml` and `.storybook/main.js`

2. **SCSS Processing**
   - Jekyll processes `assets/css/styles.scss`
   - Storybook processes imports through webpack
   - Keep shared variables in `_sass/variables/`

3. **Cache Issues**
   - Clear Jekyll cache: `bundle exec jekyll clean`
   - Clear Storybook cache: `rm -rf node_modules/.cache`

4. **Live Reload Not Working**
   - Ensure both processes are running
   - Check for SCSS compilation errors
   - Verify file paths in _config.yml

## Development Workflow

1. Component Development:
   - Create/edit components in `/src/components/`
   - Create/edit stories in `/src/components/**/*.stories.jsx`
   - Test in Storybook first

2. Jekyll Integration:
   - Add components to Jekyll layouts/includes as needed
   - Test integrated components at http://localhost:4000

## Production Build
```bash
# Build Jekyll site
JEKYLL_ENV=production bundle exec jekyll build

# Build Storybook (if needed for deployment)
npm run build-storybook
```

## Monitoring Both Systems
- Keep both terminal windows visible
- Watch for compilation errors in both processes
- Use browser dev tools to debug integration issues
