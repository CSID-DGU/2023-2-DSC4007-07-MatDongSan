import type { Meta, StoryObj } from '@storybook/react';

import { RadarChart } from './index';

const meta = {
  component: RadarChart,
  title: 'molecules/RadarChart',
  tags: ['autodocs'],
} satisfies Meta<typeof RadarChart>;

export default meta;
type Story = StoryObj<typeof RadarChart>;

export const Primary = {} satisfies Story;
