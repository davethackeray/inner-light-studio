import React from 'react';
import { SpiritualMeditations } from './SpiritualMeditations';

export default {
  title: 'Spiritual/SpiritualMeditations',
  component: SpiritualMeditations,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## SpiritualMeditations
A collection of meditation cards that showcase spiritual practices and mindfulness sessions.
Features gentle animations, inspirational quotes, and a calming design aesthetic.
        `
      }
    }
  }
};

const sampleMeditations = [
  {
    id: 1,
    title: 'Morning Light Meditation',
    symbol: '☀️',
    quote: 'Each sunrise brings new potential for inner peace and creative awakening',
    description: 'Start your day with intentional breathing and gentle movement. This meditation combines mindfulness with artistic expression.',
    duration: '20 minutes',
    type: 'Guided Meditation',
    facilitator: 'Verena',
    featured: true,
    tags: ['Morning Practice', 'Mindfulness', 'Movement']
  },
  {
    id: 2,
    title: 'Creative Flow State',
    symbol: '🌊',
    quote: 'Creativity flows when we release and trust',
    description: 'Access your deepest creative potential through this meditation designed to open artistic channels and inspire free expression.',
    duration: '30 minutes',
    type: 'Art Meditation',
    facilitator: 'Verena',
    tags: ['Creativity', 'Expression', 'Flow']
  },
  {
    id: 3,
    title: 'Evening Reflection',
    symbol: '🌙',
    quote: 'In stillness, we find our truth',
    description: 'A gentle evening practice combining movement and meditation to process the day and prepare for restful sleep.',
    duration: '15 minutes',
    type: 'Movement Meditation',
    facilitator: 'Verena',
    tags: ['Evening Practice', 'Relaxation', 'Movement']
  },
  {
    id: 4,
    title: 'Dance of the Spirit',
    symbol: '💫',
    description: 'Connect with your inner spirit through fluid movement and guided visualization. Perfect for enhancing mind-body awareness.',
    duration: '25 minutes',
    type: 'Movement Meditation',
    facilitator: 'Verena',
    tags: ['Dance', 'Spirit', 'Movement']
  }
];

const Template = (args) => <SpiritualMeditations {...args} />;

export const Default = Template.bind({});
Default.args = {
  meditations: sampleMeditations,
  onMeditationSelect: (meditation) => console.log('Selected meditation:', meditation.title)
};

export const FeaturedOnly = Template.bind({});
FeaturedOnly.args = {
  meditations: sampleMeditations.filter(m => m.featured),
  onMeditationSelect: (meditation) => console.log('Selected meditation:', meditation.title)
};

export const NoQuotes = Template.bind({});
NoQuotes.args = {
  meditations: sampleMeditations.map(({ quote, ...meditation }) => meditation),
  onMeditationSelect: (meditation) => console.log('Selected meditation:', meditation.title)
};

export const SingleMeditation = Template.bind({});
SingleMeditation.args = {
  meditations: [sampleMeditations[0]],
  onMeditationSelect: (meditation) => console.log('Selected meditation:', meditation.title)
};

export const LoadingState = () => (
  <div className="spiritual-meditations">
    {[1, 2, 3].map((key) => (
      <div
        key={key}
        className="spiritual-meditations__card"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.05), rgba(245, 240, 235, 0.8))',
          animation: 'pulse 1.5s infinite'
        }}
      >
        <div className="spiritual-meditations__symbol" style={{ opacity: 0.5 }} />
        <div style={{ height: '24px', width: '60%', background: 'rgba(255, 215, 0, 0.1)', marginBottom: '1rem' }} />
        <div style={{ height: '80px', width: '100%', background: 'rgba(255, 215, 0, 0.1)', marginBottom: '1rem' }} />
        <div style={{ height: '20px', width: '40%', background: 'rgba(255, 215, 0, 0.1)' }} />
      </div>
    ))}
  </div>
);

export const Empty = Template.bind({});
Empty.args = {
  meditations: [],
  onMeditationSelect: (meditation) => console.log('Selected meditation:', meditation.title)
};
