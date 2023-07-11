import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Wrapper as Component, Text } from 'sb-react-native-web';

export default {
  title: 'Components/Wrapper',
  component: Component,
  args: {
    bg: 'gray25',
    fullWidth: false,
    fullHeight: false,
  },
  argTypes: {
    children: { control: { type: null } }
  },
} as Meta<typeof Component>;

export const Wrapper: StoryFn<typeof Component> = (args) => (
  <Component {...args}>
    <Text variant='body'>
      Hello world!
    </Text>
  </Component>
);
