# Contributing to Inner Light Studio Website

We love your input! We want to make contributing to the Inner Light Studio website as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Development Process

All changes happen through pull requests. Pull requests are the best way to propose changes. We actively welcome your pull requests:

1. Fork the repo and create your branch from `main`
2. If you've added code that should be tested, add tests
3. If you've changed APIs, update the documentation
4. Ensure the test suite passes
5. Make sure your code lints
6. Issue a pull request

## Local Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/inner-light-studio.git
   cd inner-light-studio
   ```

2. Install Ruby dependencies:
   ```bash
   bundle install
   ```

3. Install Node.js dependencies:
   ```bash
   npm install
   ```

4. Start the development servers:
   ```bash
   # Terminal 1: Start Jekyll
   bundle exec jekyll serve

   # Terminal 2: Start Webpack
   npm run dev
   ```

## Project Structure

Please maintain the following structure when adding new features:

- Place React components in `src/components/`
- Add new pages in `_pages/`
- Include styles in appropriate files under `_sass/`
- Add images and media in `assets/images/`
- Update documentation when adding new features

## Style Guide

### JavaScript

- Use ES6+ features
- Follow ESLint configuration
- Use functional components with hooks for React
- Document complex functions and components

### CSS/SCSS

- Follow BEM methodology
- Keep selectors shallow
- Use variables for colors and spacing
- Mobile-first approach

### Jekyll/Liquid

- Use front matter for page metadata
- Keep layouts DRY
- Use includes for repeated elements
- Follow Jekyll best practices

## Pull Request Process

1. Update the README.md with details of changes to the interface
2. Update the documentation with details of any new functionality
3. The PR will be merged once you have sign-off from a maintainer

## Code of Conduct

### Our Standards

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

### Attribution

This Code of Conduct is adapted from the [Contributor Covenant](https://www.contributor-covenant.org/).

## Questions?

Don't hesitate to ask questions by opening an issue or contacting one of the maintainers directly.

## License

By contributing, you agree that your contributions will be licensed under its MIT License.
