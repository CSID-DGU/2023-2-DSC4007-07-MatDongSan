import { DIRECTION } from '@/constants';

import type { Meta, StoryObj } from '@storybook/react';

import { ArrowButton } from './index';

const meta = {
  component: ArrowButton,
  title: 'atoms/ArrowButton',
  tags: ['autodocs'],
  argTypes: {
    direction: {
      options: [DIRECTION.RIGHT, DIRECTION.LEFT],
      control: { type: 'select' },
    },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof ArrowButton>;

export default meta;
type Story = StoryObj<typeof ArrowButton>;

export const Primary = {
  args: {
    direction: DIRECTION.RIGHT,
  },
} satisfies Story;
