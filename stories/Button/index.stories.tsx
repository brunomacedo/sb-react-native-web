import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Button, ThemeProvider } from 'sb-app-chiper';

export default {
  title: 'components/Button',
  component: Button,
} as Meta<typeof Button>;

export const Basic: StoryFn<typeof Button> = (args) => (
  <ThemeProvider>
    <Button {...args} />
  </ThemeProvider>
);

Basic.args = {
  label: 'Hello World',
  variant: 'primary',
  type: 'small',
  maxWidth: 200,
};
