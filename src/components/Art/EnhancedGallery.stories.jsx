import React from 'react';
import EnhancedGallery from './EnhancedGallery';

export default {
    title: 'Components/Art/EnhancedGallery',
    component: EnhancedGallery,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'A responsive masonry-style gallery with lightbox support and hover effects.',
            },
        },
    },
    argTypes: {
        columns: {
            control: { type: 'number', min: 1, max: 5 },
            description: 'Number of columns in the gallery',
            defaultValue: 3,
        },
        gap: {
            control: 'text',
            description: 'Gap between gallery items (CSS value)',
            defaultValue: '1rem',
        },
        onImageClick: { action: 'clicked' },
    },
};

const Template = (args) => <EnhancedGallery {...args} />;

export const Default = Template.bind({});
Default.args = {
    columns: 3,
    gap: '1rem',
    images: [
        {
            id: 1,
            src: 'https://source.unsplash.com/800x800/?abstract,art',
            alt: 'Abstract Composition I',
            title: 'Abstract Composition I',
            description: 'Mixed media on canvas, 2024',
        },
        {
            id: 2,
            src: 'https://source.unsplash.com/800x800/?painting',
            alt: 'Movement in Gold',
            title: 'Movement in Gold',
            description: 'Acrylic and gold leaf, 2024',
        },
        {
            id: 3,
            src: 'https://source.unsplash.com/800x800/?contemporary',
            alt: 'Spiritual Journey',
            title: 'Spiritual Journey',
            description: 'Oil on canvas, 2024',
        },
    ],
};

export const TwoColumns = Template.bind({});
TwoColumns.args = {
    ...Default.args,
    columns: 2,
};

export const FourColumns = Template.bind({});
FourColumns.args = {
    ...Default.args,
    columns: 4,
};

export const LargeGap = Template.bind({});
LargeGap.args = {
    ...Default.args,
    gap: '2rem',
};

export const NoDescriptions = Template.bind({});
NoDescriptions.args = {
    ...Default.args,
    images: Default.args.images.map(({ description, ...image }) => image),
};

export const Empty = Template.bind({});
Empty.args = {
    images: [],
};

export const SingleImage = Template.bind({});
SingleImage.args = {
    images: [Default.args.images[0]],
    columns: 1,
};