import React from 'react';
import RelatedContent from './RelatedContent';

export default {
  title: 'Common/RelatedContent',
  component: RelatedContent,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A component for displaying related content with relationship types, strengths, and shared tags.'
      }
    }
  }
};

const Template = (args) => <RelatedContent {...args} />;

// Sample tags for consistent use across stories
const SAMPLE_TAGS = {
  movement: ['flow', 'body', 'expression', 'rhythm'],
  meditation: ['mindfulness', 'breath', 'awareness', 'presence'],
  art: ['organic', 'abstract', 'nature', 'form']
};

export const AllRelationshipTypes = Template.bind({});
AllRelationshipTypes.args = {
  relationships: {
    thematic: [
      {
        type: 'artwork',
        title: 'Flowing Forms',
        url: '/art/flowing-forms',
        reason: 'Shares themes of fluid movement and organic forms',
        strength: 0.9,
        sharedTags: ['flow', 'organic', 'form']
      },
      {
        type: 'meditation',
        title: 'Morning Light Meditation',
        url: '/spiritual/morning-light',
        reason: 'Explores natural rhythms and bodily awareness',
        strength: 0.8,
        sharedTags: ['rhythm', 'body', 'flow']
      }
    ],
    inspirational: [
      {
        type: 'workshop',
        title: 'Expressive Dance',
        url: '/movement/expressive-dance',
        reason: 'Dance movements directly inspired the artwork\'s gestural elements',
        strength: 0.95,
        sharedTags: ['expression', 'flow', 'body']
      },
      {
        type: 'meditation',
        title: 'Sacred Breath',
        url: '/spiritual/sacred-breath',
        reason: 'Breathwork patterns inspire movement qualities',
        strength: 0.7,
        sharedTags: ['breath', 'rhythm', 'flow']
      }
    ],
    complementary: [
      {
        type: 'meditation',
        title: 'Sacred Breath',
        url: '/spiritual/sacred-breath',
        reason: 'Enhances movement awareness through breathwork',
        strength: 0.85,
        sharedTags: ['breath', 'awareness', 'presence']
      },
      {
        type: 'artwork',
        title: 'Abstract Composition I',
        url: '/art/abstract-composition-i',
        reason: 'Visual inspiration for movement qualities',
        strength: 0.75,
        sharedTags: ['abstract', 'form', 'expression']
      }
    ],
    sequential: [
      {
        type: 'meditation',
        title: 'Morning Light Meditation',
        url: '/spiritual/morning-light',
        reason: 'Begin your journey with centering practice',
        strength: 0.9,
        sharedTags: ['mindfulness', 'presence', 'awareness']
      },
      {
        type: 'workshop',
        title: 'Contemporary Flow',
        url: '/movement/contemporary-flow',
        reason: 'Progress to embodied movement exploration',
        strength: 0.85,
        sharedTags: ['flow', 'body', 'expression']
      }
    ]
  }
};

export const WithVaryingStrengths = Template.bind({});
WithVaryingStrengths.args = {
  relationships: {
    thematic: [
      {
        type: 'artwork',
        title: 'Flowing Forms',
        url: '/art/flowing-forms',
        reason: 'Strong thematic connection through fluid forms',
        strength: 0.9,
        sharedTags: ['flow', 'organic', 'nature']
      },
      {
        type: 'meditation',
        title: 'River Meditation',
        url: '/spiritual/river-meditation',
        reason: 'Moderate connection through water themes',
        strength: 0.6,
        sharedTags: ['flow', 'nature']
      },
      {
        type: 'workshop',
        title: 'Nature Dance',
        url: '/movement/nature-dance',
        reason: 'Subtle connection through natural elements',
        strength: 0.3,
        sharedTags: ['nature']
      }
    ]
  }
};

export const WithSharedTags = Template.bind({});
WithSharedTags.args = {
  relationships: {
    complementary: [
      {
        type: 'meditation',
        title: 'Sacred Breath',
        url: '/spiritual/sacred-breath',
        reason: 'Deep connection through mindfulness practice',
        strength: 0.9,
        sharedTags: ['mindfulness', 'breath', 'awareness', 'presence']
      },
      {
        type: 'workshop',
        title: 'Mindful Movement',
        url: '/movement/mindful-movement',
        reason: 'Integrated mindfulness and movement',
        strength: 0.85,
        sharedTags: ['mindfulness', 'body', 'awareness']
      }
    ]
  }
};

export const Empty = Template.bind({});
Empty.args = {
  relationships: {}
};

export const SingleItem = Template.bind({});
SingleItem.args = {
  relationships: {
    complementary: [
      {
        type: 'meditation',
        title: 'Sacred Breath',
        url: '/spiritual/sacred-breath',
        reason: 'Enhances movement awareness through breathwork',
        strength: 0.8,
        sharedTags: ['breath', 'awareness', 'presence']
      }
    ]
  }
};