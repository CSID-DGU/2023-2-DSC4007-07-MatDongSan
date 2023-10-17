import { Meta, StoryObj } from '@storybook/react';

import { RADAR_ICON_TYPE } from '@/constants';

import { RadarMarker } from './index';

const meta = {
  component: RadarMarker,
  title: 'atoms/Markers/RadarMarker',
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: [RADAR_ICON_TYPE.SCHOOL, RADAR_ICON_TYPE.SUBWAY],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof RadarMarker>;

export default meta;

type Story = StoryObj<typeof RadarMarker>;

export const Primary = {
  args: {
    text: '휘카페',
    distance: '70',
    type: RADAR_ICON_TYPE.SCHOOL,
  },
} satisfies Story;
