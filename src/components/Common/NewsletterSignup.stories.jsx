import React from 'react';
import NewsletterSignup from './NewsletterSignup';

export default {
  title: 'Components/Common/NewsletterSignup',
  component: NewsletterSignup,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1a1a1a' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <NewsletterSignup {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Join Our Newsletter',
  description: 'Subscribe to receive updates about new artworks, exhibitions, and special events.',
  buttonText: 'Subscribe',
  placeholder: 'Enter your email',
};

export const CustomContent = Template.bind({});
CustomContent.args = {
  title: 'Stay in Flow',
  description: 'Get weekly inspiration, movement practices, and mindfulness tips delivered to your inbox.',
  buttonText: 'Join Now',
  placeholder: 'Your email address',
};

export const WithSuccess = Template.bind({});
WithSuccess.args = {
  ...Default.args,
  success: true,
  successMessage: 'Thank you for subscribing!',
};

export const LoadingState = Template.bind({});
LoadingState.args = {
  ...Default.args,
  loading: true,
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  error: 'Please enter a valid email address.',
};

export const WithCustomTheme = Template.bind({});
WithCustomTheme.args = {
  ...Default.args,
  theme: {
    primary: '#8B5CF6',
    text: '#1F2937',
    background: '#F3F4F6',
  },
};
