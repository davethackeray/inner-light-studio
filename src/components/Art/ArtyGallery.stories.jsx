import React from 'react';
import { ArtyGallery } from './ArtyGallery';

export default {
  title: 'Art/ArtyGallery',
  component: ArtyGallery,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## ArtyGallery
A responsive grid gallery component designed to showcase Verena's artwork.
Features smooth hover animations, image overlays, and automatic responsive behavior.
        `
      }
    }
  },
  argTypes: {
    columns: {
      control: { type: 'number', min: 1, max: 4 },
      description: 'Number of columns in the grid'
    },
    gap: {
      control: 'text',
      description: 'Gap between grid items (CSS value)'
    },
    onImageClick: {
      action: 'image clicked',
      description: 'Callback when an image is clicked'
    }
  }
};

const sampleImages = [
  {
    id: 1,
    src: 'https://source.unsplash.com/800x800/?abstract,art',
    alt: 'Abstract Composition I',
    title: 'Abstract Composition I',
    description: 'Mixed media on canvas, 2024'
  },
  {
    id: 2,
    src: 'https://source.unsplash.com/800x800/?painting',
    alt: 'Movement in Gold',
    title: 'Movement in Gold',
    description: 'Acrylic and gold leaf, 2024'
  },
  {
    id: 3,
    src: 'https://source.unsplash.com/800x800/?contemporary',
    alt: 'Spiritual Journey',
    title: 'Spiritual Journey',
    description: 'Oil on canvas, 2024'
  },
  {
    id: 4,
    src: 'https://source.unsplash.com/800x800/?modern,art',
    alt: 'Dance of Colors',
    title: 'Dance of Colors',
    description: 'Mixed media, 2024'
  },
  {
    id: 5,
    src: 'https://source.unsplash.com/800x800/?artwork',
    alt: 'Meditation in Blue',
    title: 'Meditation in Blue',
    description: 'Watercolor and ink, 2024'
  },
  {
    id: 6,
    src: 'https://source.unsplash.com/800x800/?gallery',
    alt: 'Golden Flow',
    title: 'Golden Flow',
    description: 'Acrylic on canvas, 2024'
  }
];

const Template = (args) => <ArtyGallery {...args} />;

export const Default = Template.bind({});
Default.args = {
  images: sampleImages,
  columns: 3,
  gap: '1rem'
};

export const TwoColumns = Template.bind({});
TwoColumns.args = {
  images: sampleImages,
  columns: 2,
  gap: '1.5rem'
};

export const SingleColumn = Template.bind({});
SingleColumn.args = {
  images: sampleImages.slice(0, 3),
  columns: 1,
  gap: '2rem'
};

export const NoTitles = Template.bind({});
NoTitles.args = {
  images: sampleImages.map(({ id, src, alt }) => ({ id, src, alt })),
  columns: 3,
  gap: '1rem'
};

export const LoadingState = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
    {[1, 2, 3].map((key) => (
      <div key={key} className="arty-gallery__item loading" style={{ aspectRatio: '1' }} />
    ))}
  </div>
);
