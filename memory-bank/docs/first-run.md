# First Run Setup Instructions

## 1. Initial Repository Setup
```bash
# Initialize git repository
git init

# Create initial .gitignore
cat > .gitignore << EOL
# Jekyll
_site/
.sass-cache/
.jekyll-cache/
.jekyll-metadata
vendor/

# Node
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
storybook-static/

# Build
dist/
assets/dist/

# OS
.DS_Store
Thumbs.db
*.swp

# IDE
.idea/
.vscode/
*.sublime-workspace
*.sublime-project
EOL

# Create initial directories if they don't exist
mkdir -p _layouts _includes _data _sass assets/images src/components
mkdir -p _artworks _meditations _workshops
mkdir -p .github/workflows

# Initial commit
git add .
git commit -m "feat: Initial project structure"

# Create and switch to develop branch
git branch develop
git checkout develop
```

## 2. Environment Setup
```bash
# Install Ruby dependencies
bundle install

# Install Node dependencies
npm install

# Create basic Jekyll config if it doesn't exist
cat > _config.yml << EOL
title: Inner Light Studio
description: Art, Movement & Meditation Space
baseurl: ""
url: ""

# Collections
collections:
  artworks:
    output: true
    permalink: /art/:title/
  meditations:
    output: true
    permalink: /spiritual/:title/
  workshops:
    output: true
    permalink: /movement/:title/

# Build settings
markdown: kramdown
plugins:
  - jekyll-feed
  - jekyll-seo-tag

# Sass processing
sass:
  style: compressed
  load_paths:
    - _sass
    - node_modules

# Exclude from processing
exclude:
  - Gemfile
  - Gemfile.lock
  - node_modules
  - vendor
  - .git
  - .github
  - README.md
  - package.json
  - package-lock.json
  - src
  - .storybook
  - memory-bank
EOL
```

## 3. GitHub Repository Setup

1. Create new repository on GitHub:
   - Go to https://github.com/new
   - Name: inner-light-studio
   - Description: Art, Movement & Meditation Space
   - Public repository
   - Don't initialize with README

2. Link and push repository:
```bash
git remote add origin git@github.com:USERNAME/inner-light-studio.git
git push -u origin develop
git push -u origin main
```

## 4. Setup GitHub Actions

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy Jekyll + Storybook

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      # Setup Ruby
      - uses: ruby/setup-ruby@v1
        with:
          ruby-version: '3.3.0'
          bundler-cache: true
      
      # Setup Node
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
          cache: 'npm'
      
      # Install dependencies
      - run: npm ci
      - run: bundle install
      
      # Build Storybook
      - run: npm run build-storybook
      
      # Build Jekyll
      - run: JEKYLL_ENV=production bundle exec jekyll build
      
      # Deploy
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./_site
```

## 5. Verify Setup

1. Test Jekyll:
```bash
bundle exec jekyll serve
```
- Visit http://localhost:4000

2. Test Storybook:
```bash
npm run storybook
```
- Visit http://localhost:6006

## 6. Next Steps

1. Create initial layouts in `_layouts/`
2. Set up basic includes in `_includes/`
3. Configure Storybook stories
4. Add first components
5. Create sample content in collections
6. Setup GitHub branch protection rules
7. Configure GitHub Pages deployment

## 7. Common Issues

1. **Jekyll Build Fails**
   - Check Ruby version matches Gemfile
   - Verify _config.yml syntax
   - Check for missing dependencies

2. **Storybook Issues**
   - Clear cache: `rm -rf node_modules/.cache`
   - Check Node version
   - Verify webpack configuration

3. **SCSS Processing**
   - Follow sass-modernization.md guide
   - Check load paths in _config.yml
   - Verify Storybook SCSS loading