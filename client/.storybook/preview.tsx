import React from 'react';

import type { Preview } from '@storybook/react';

import { Center } from './Center';

const preview: Preview = {
  decorators: [
    (Story) => (
      <Center>
        <Story />
      </Center>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
