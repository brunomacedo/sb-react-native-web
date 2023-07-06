import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Button as Component, ThemeProvider } from 'react-native-sb-chiper';

export default {
  title: 'Components/Button',
  component: Component,
  args: {
    label: 'Hello World',
    variant: 'primary',
    type: 'small',
  },
} as Meta<typeof Component>;

export const Button: StoryFn<typeof Component> = (args) => (
  <ThemeProvider>
    <Component {...args} />
  </ThemeProvider>
);
