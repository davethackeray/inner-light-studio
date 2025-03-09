# GitHub Repository Setup

## Repository Structure
```
inner-light-studio/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions workflow
├── .storybook/              # Storybook configuration
├── _artworks/               # Jekyll collection
├── _workshops/              # Jekyll collection
├── _meditations/            # Jekyll collection
├── _includes/               # Jekyll includes
├── _layouts/                # Jekyll layouts
├── _sass/                   # Shared SCSS
├── assets/                  # Static assets
├── src/                     # React components
└── memory-bank/            # Documentation
```

## Initial Setup Steps

1. Create new repository on GitHub:
   - Name: `inner-light-studio`
   - Description: "Inner Light Studio - Art, Movement & Meditation"
   - Public repository
   - Don't initialize with README

2. Initialize local repository:
```bash
git init
git add .
git commit -m "Initial commit: Jekyll + Storybook hybrid setup"
git branch -M main
git remote add origin git@github.com:username/inner-light-studio.git
git push -u origin main
```

## Required GitHub Settings

1. Branch Protection Rules:
   - Go to Settings > Branches
   - Add rule for `main` branch
   - Require pull request reviews
   - Require status checks to pass
   - Include administrators in restrictions

2. GitHub Pages:
   - Go to Settings > Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`
   - Save settings

3. Environment Secrets:
   - Go to Settings > Secrets
   - Add following secrets:
     - `JEKYLL_PAT`: GitHub Personal Access Token
     - Add any other API keys needed

## .gitignore Configuration
```
# Jekyll
_site/
.sass-cache/
.jekyll-cache/
.jekyll-metadata
vendor/

# Node
node_modules/
npm-debug.log*
storybook-static/

# Build
dist/
assets/dist/

# OS
.DS_Store
*.swp
*.swo

# IDE
.idea/
.vscode/
*.sublime-workspace
*.sublime-project
```

## GitHub Actions Workflow

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

## Pull Request Template

Create `.github/pull_request_template.md`:
```markdown
## Description
[Description of changes]

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing Steps
1. [First step]
2. [Second step]
3. [And so on...]

## Checklist
- [ ] Tested in development environment
- [ ] Updated documentation
- [ ] Added/updated tests
- [ ] Storybook stories updated
- [ ] Verified in Jekyll build
```

## Branch Strategy

1. Main Branches:
   - `main`: Production-ready code
   - `develop`: Integration branch

2. Supporting Branches:
   - `feature/*`: New features
   - `bugfix/*`: Bug fixes
   - `hotfix/*`: Emergency fixes
   - `docs/*`: Documentation updates

3. Branch Naming:
   - Features: `feature/add-meditation-timer`
   - Bugs: `bugfix/fix-gallery-layout`
   - Docs: `docs/update-setup-guide`

## Commit Conventions

Follow Conventional Commits:
```
type(scope): description

[optional body]

[optional footer]
```

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Formatting
- refactor: Code restructuring
- test: Adding tests
- chore: Maintenance

Example:
```
feat(gallery): add lightbox component

- Implements image zoom functionality
- Adds keyboard navigation
- Includes swipe gestures for mobile

Closes #123