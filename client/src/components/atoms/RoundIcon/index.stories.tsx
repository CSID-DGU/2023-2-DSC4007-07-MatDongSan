import { Meta, StoryObj } from '@storybook/react';

import { RoundIcon } from './index';

const meta = {
  component: RoundIcon,
  title: 'atoms/RoundIcon',
  tags: ['autodocs'],
} satisfies Meta<typeof RoundIcon>;

export default meta;

type Story = StoryObj<typeof RoundIcon>;

export const Primary = {
  args: {
    text: '휘카페',
    distance: '70',
  },
} satisfies Story;
