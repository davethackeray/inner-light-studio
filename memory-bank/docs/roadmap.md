# Jekyll Handoff Note

## Current Status
- Project has both Storybook and Jekyll environments
- Successfully configured Storybook with SCSS and Babel support
- Jekyll setup not yet initiated

## Jekyll Setup Tasks
1. **Required Gemfile Dependencies**
```ruby
source "https://rubygems.org"
gem "jekyll", "~> 4.3.2"
# Optional but recommended plugins
gem "jekyll-feed"
gem "jekyll-seo-tag"
```

2. **Directory Structure Required**
```
.
├── _config.yml         # Configuration file (needs creation)
├── _layouts           # Theme layouts (needs creation)
├── _includes         # Reusable components (needs creation)
├── _sass            # Sass partials (exists)
├── assets           # Site assets (exists)
└── src             # React components (exists)
```

3. **Known Issues**
- Potential conflicts between Jekyll and React/Storybook build processes
- Need to ensure _sass directory is properly integrated with both systems
- May need to adjust asset pipeline for images and other static files

4. **Next Steps**
- Initialize Jekyll with `jekyll new . --force`
- Configure _config.yml for our hybrid setup
- Set up Jekyll collections for:
  - _artworks
  - _meditations
  - _workshops
- Integrate existing SCSS architecture with Jekyll's asset pipeline

## Integration Notes
- Keep React components in src/ directory
- Jekyll will build to _site directory
- Storybook builds to storybook-static
- Need to ensure proper .gitignore rules for both systems

## System Requirements
- Ruby >= 2.7.0
- Node.js >= 18
- Bundler
- npm or yarn

## Critical Paths
1. Jekyll build process must not interfere with Storybook's webpack configuration
2. SCSS compilation needs to work for both systems
3. Asset handling must be coordinated between both systems

## Security Notes
- Ensure Jekyll environment variables are properly set
- Keep sensitive data out of public repositories
- Use proper CORS headers when deploying

This handoff note is a living document - please update as you make progress.
