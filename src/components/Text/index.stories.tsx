import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Text as Component } from 'sb-react-native-web';

export default {
  component: Component,
  args: {
    color: 'green',
    variant: 'body',
  },
} as Meta<typeof Component>;

export const Text: StoryFn<typeof Component> = (args) => (
  <Component {...args}>Hello world!</Component>
);
