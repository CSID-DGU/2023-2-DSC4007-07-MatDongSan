import type { Meta } from '@storybook/react';

import { SideBar } from './index';

const meta = {
  component: SideBar,
  title: 'organisms/SideBar',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SideBar>;

export default meta;
// type Story = StoryObj<typeof SideBar>;

// export const Primary = {
//   args: {
//     isShow: true,
//   },
// } satisfies Story;

// export const Secondary = {
//   args: {
//     isShow: false,
//   },
// } satisfies Story;
