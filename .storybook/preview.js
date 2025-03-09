import React from 'react';
import '../src/styles/index.scss';

const withThemeProvider = (Story) => (
  <div className="inner-light-theme" style={{ 
    padding: '1rem',
    minHeight: '100vh',
    background: 'var(--color-background)',
    color: 'var(--color-text)'
  }}>
    <Story />
  </div>
);

export const decorators = [withThemeProvider];

export const parameters = {
  actions: { 
    argTypes: {
      onClick: { action: 'clicked' },
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#F7FAFC' },
      { name: 'dark', value: '#1A202C' },
      { name: 'meditation', value: '#E9D8FD' },
      { name: 'movement', value: '#FED7E2' },
      { name: 'art', value: '#FEEBC8' },
    ],
  },
  layout: 'padded',
  docs: {
    source: {
      type: 'code',
    },
  },
};
