import React from 'react';
import { MovementShowcase } from './MovementShowcase';

export default {
  title: 'Movement/MovementShowcase',
  component: MovementShowcase,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## MovementShowcase
A dynamic component for displaying dance and movement workshops.
Features video previews, workshop details, and booking functionality.
        `
      }
    }
  }
};

const sampleWorkshops = [
  {
    id: 1,
    title: 'Contemporary Flow',
    date: 'March 15, 2024 • 19:00 CET',
    duration: '90 minutes',
    description: 'Explore fluid movement and creative expression in this contemporary dance workshop. Suitable for all levels, focusing on natural flow and artistic movement.',
    thumbnail: 'https://source.unsplash.com/800x600/?dance,contemporary',
    videoUrl: 'https://example.com/sample-workshop.mp4',
    price: '€45',
    isLive: true,
    tags: ['Contemporary', 'All Levels', 'Live Online']
  },
  {
    id: 2,
    title: 'Movement Meditation',
    date: 'March 20, 2024 • 10:00 CET',
    duration: '60 minutes',
    description: 'Combine mindful movement with meditation techniques. A unique workshop bridging dance and spiritual practices for holistic wellbeing.',
    thumbnail: 'https://source.unsplash.com/800x600/?meditation,movement',
    price: '€35',
    isLive: false,
    tags: ['Meditation', 'Beginners Welcome', 'Mindfulness']
  },
  {
    id: 3,
    title: 'Expressive Arts Workshop',
    date: 'March 25, 2024 • 18:30 CET',
    duration: '120 minutes',
    description: 'A transformative journey through movement, incorporating visual arts and dance. Express yourself through multiple artistic mediums.',
    thumbnail: 'https://source.unsplash.com/800x600/?art,performance',
    videoUrl: 'https://example.com/expressive-arts.mp4',
    price: '€55',
    isLive: true,
    tags: ['Mixed Media', 'Experimental', 'Live Online']
  }
];

const Template = (args) => <MovementShowcase {...args} />;

export const Default = Template.bind({});
Default.args = {
  workshops: sampleWorkshops,
  onJoinClass: (workshop) => console.log('Joining workshop:', workshop.title)
};

export const SingleWorkshop = Template.bind({});
SingleWorkshop.args = {
  workshops: [sampleWorkshops[0]],
  onJoinClass: (workshop) => console.log('Joining workshop:', workshop.title)
};

export const NoVideo = Template.bind({});
NoVideo.args = {
  workshops: sampleWorkshops.map(workshop => ({
    ...workshop,
    videoUrl: undefined
  })),
  onJoinClass: (workshop) => console.log('Joining workshop:', workshop.title)
};

export const LoadingState = () => (
  <div className="movement-showcase">
    {[1, 2].map((key) => (
      <div key={key} className="movement-showcase__item loading">
        <div className="movement-showcase__media" style={{ minHeight: '300px' }} />
        <div className="movement-showcase__content">
          <div className="movement-showcase__title" style={{ height: '2rem', width: '60%', marginBottom: '1rem' }} />
          <div className="movement-showcase__meta" style={{ height: '1rem', width: '40%', marginBottom: '1rem' }} />
          <div className="movement-showcase__description" style={{ height: '4rem', marginBottom: '1rem' }} />
          <div className="movement-showcase__tags" style={{ height: '2rem', width: '80%' }} />
          <div className="movement-showcase__actions" style={{ height: '3rem', marginTop: '1rem' }} />
        </div>
      </div>
    ))}
  </div>
);

export const NoWorkshops = Template.bind({});
NoWorkshops.args = {
  workshops: [],
  onJoinClass: (workshop) => console.log('Joining workshop:', workshop.title)
};
