import React from 'react';
import { ArtyButton } from './ArtyButton';

export default {
  title: 'Common/ArtyButton',
  component: ArtyButton,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'spiritual', 'movement'],
      description: 'The visual style variant of the button'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the button'
    },
    isAnimated: {
      control: 'boolean',
      description: 'Whether to show hover animations'
    },
    children: {
      control: 'text',
      description: 'Button content'
    },
    onClick: { action: 'clicked' }
  },
  parameters: {
    docs: {
      description: {
        component: `
## ArtyButton
A versatile button component that brings Verena's artistic style to interactive elements.
Features smooth animations, multiple variants for different sections of the site,
and a distinctive design language that ties the experience together.
        `
      }
    }
  }
};

const Template = (args) => <ArtyButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'View Gallery',
  variant: 'primary',
  size: 'medium',
  isAnimated: true
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Learn More',
  variant: 'secondary',
  size: 'medium',
  isAnimated: true
};

export const Spiritual = Template.bind({});
Spiritual.args = {
  children: 'Begin Meditation',
  variant: 'spiritual',
  size: 'medium',
  isAnimated: true
};

export const Movement = Template.bind({});
Movement.args = {
  children: 'Join Class',
  variant: 'movement',
  size: 'medium',
  isAnimated: true
};

export const Small = Template.bind({});
Small.args = {
  children: 'Small Button',
  variant: 'primary',
  size: 'small',
  isAnimated: true
};

export const Large = Template.bind({});
Large.args = {
  children: 'Large Button',
  variant: 'primary',
  size: 'large',
  isAnimated: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  variant: 'primary',
  size: 'medium',
  isAnimated: true,
  disabled: true
};

// Example of button usage in different contexts
export const ButtonGrid = () => (
  <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(2, auto)', justifyItems: 'start' }}>
    <ArtyButton variant="primary">View Artwork</ArtyButton>
    <ArtyButton variant="secondary">Contact Artist</ArtyButton>
    <ArtyButton variant="spiritual">Daily Reflection</ArtyButton>
    <ArtyButton variant="movement">Book Workshop</ArtyButton>
  </div>
);
