import { Meta, StoryObj } from '@storybook/react';

import { MAP_ICON_TYPE } from '@/constants';

import { KMapMarker } from './index';

const meta = {
  component: KMapMarker,
  title: 'atoms/Markers/KMapMarker',
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: [MAP_ICON_TYPE.HOUSE, MAP_ICON_TYPE.SUBWAY],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof KMapMarker>;

export default meta;

type Story = StoryObj<typeof KMapMarker>;

export const Primary = {
  args: {
    type: MAP_ICON_TYPE.HOUSE,
  },
} satisfies Story;
