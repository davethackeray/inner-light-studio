# Inner Light Studio

A hybrid Jekyll + React site for Inner Light Studio, featuring art galleries, meditation resources, and movement workshops.

## 🌟 Features

- **Art Galleries**: Dynamic galleries with React components
- **Meditation Resources**: Guided meditations and practice resources  
- **Movement Workshops**: Class schedules and workshop information
- **Cross-content Relationships**: Smart content discovery system
- **Responsive Design**: Mobile-first approach
- **Modern Stack**: Jekyll + React/Storybook

## 🚀 Quick Start

### Prerequisites

- Ruby >= 2.7.0
- Node.js >= 18
- Bundler (`gem install bundler`)
- Git

### Installation

1. Clone the repository:
```bash
git clone git@github.com:USERNAME/inner-light-studio.git
cd inner-light-studio
```

2. Install dependencies:
```bash
# Install Ruby dependencies
bundle install

# Install Node dependencies
npm install
```

3. Start development servers:
```bash
# Terminal 1: Start Jekyll
bundle exec jekyll serve --livereload

# Terminal 2: Start Storybook
npm run storybook
```

4. Visit:
- Jekyll: http://localhost:4000
- Storybook: http://localhost:6006

## 🏗 Project Structure

```
inner-light-studio/
├── _artworks/          # Art collection content
├── _meditations/       # Meditation content
├── _workshops/         # Workshop content
├── _includes/          # Jekyll includes
├── _layouts/          # Jekyll layouts
├── _sass/             # Shared SCSS
├── assets/            # Static assets
├── src/               # React components
└── .storybook/        # Storybook configuration
```

## 🛠 Development

### Content Management

- Art pieces: Add to `_artworks/`
- Meditations: Add to `_meditations/`
- Workshops: Add to `_workshops/`

### Component Development

1. Create component in `src/components/`
2. Add stories in `src/components/**/*.stories.jsx`
3. Test in Storybook
4. Integrate into Jekyll layouts/includes

### Styles

- Global styles: `_sass/`
- Component styles: Alongside components
- Follow BEM methodology
- Use CSS Modules for React components

## 📚 Documentation

Comprehensive documentation available in `memory-bank/docs/`:

- [First Run Setup](memory-bank/docs/first-run.md)
- [Startup Guide](memory-bank/docs/startup.md)
- [GitHub Setup](memory-bank/docs/github-setup.md)
- [SCSS Modernization](memory-bank/docs/sass-modernization.md)

## 🚢 Deployment

### Production Build

```bash
# Build Jekyll site
JEKYLL_ENV=production bundle exec jekyll build

# Build Storybook (if needed)
npm run build-storybook
```

### GitHub Pages Deployment

Automatic deployment via GitHub Actions when pushing to `main` branch.

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'feat: Add amazing feature'`)
4. Push branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- Design: Inner Light Studio Team
- Development: Inner Light Studio Tech Team
- Content: Inner Light Studio Artists & Teachers

---

<p align="center">Made with ❤️ at Inner Light Studio</p>
