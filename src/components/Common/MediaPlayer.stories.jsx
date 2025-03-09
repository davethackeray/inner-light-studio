import React from 'react';
import MediaPlayer from './MediaPlayer';

// Sample audio for testing purposes (replace with actual audio files)
const sampleAudioUrl = 'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav';

export default {
  title: 'Components/Common/MediaPlayer',
  component: MediaPlayer,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A versatile media player component supporting both audio and video content with custom controls and responsive design.'
      }
    }
  },
  argTypes: {
    type: {
      control: { type: 'select', options: ['audio', 'video'] },
      defaultValue: 'audio',
      description: 'Type of media to play'
    },
    src: { 
      control: 'text',
      description: 'Source URL for the media file'
    },
    title: { 
      control: 'text',
      description: 'Title of the media content'
    }
  }
};

const Template = (args) => <MediaPlayer {...args} />;

export const SimpleAudioPlayer = Template.bind({});
SimpleAudioPlayer.args = {
  type: 'audio',
  src: sampleAudioUrl,
  title: 'Sample Audio'
};

export const GuidedMeditation = Template.bind({});
GuidedMeditation.args = {
  type: 'audio',
  src: sampleAudioUrl,
  title: 'Morning Light Meditation'
};

// Decorator for consistent story presentation
export const decorators = [
  (Story) => (
    <div style={{ 
      padding: '2rem',
      maxWidth: '800px',
      margin: '0 auto',
      background: 'var(--color-background)',
      borderRadius: 'var(--border-radius-lg)',
      border: '1px solid var(--color-border)',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <Story />
    </div>
  )
];
