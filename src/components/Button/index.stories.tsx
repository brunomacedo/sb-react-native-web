import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { User } from 'phosphor-react-native';
import { Button as Component, theme } from 'sb-react-native-web';

export default {
  title: 'Components/Button',
  component: Component,
  args: {
    label: 'Primary',
    variant: 'primary',
    type: 'medium',
    loading: false,
  },
  argTypes: {
    width: { table:  { disable: true } },
    height: { table:  { disable: true } },
    shadowColor: { table:  { disable: true } },
  },
} as Meta<typeof Component>;

export const Primary: StoryFn<typeof Component> = (args) => (
  <>
    <Component {...args} />
    <Component
      {...args}
      marginTop="spacing-s"
      loading
    />
    <Component
      {...args}
      label="Text"
      onPress={() => { }}
      marginTop="spacing-s"
      icon={(
        <User
          weight="bold"
          color={theme.colors.white}
          size={14}
        />)
      }
    />
  </>
);

export const Outlined: StoryFn<typeof Component> = (args) => (
  <Component {...args} />
);

Outlined.args = {
  label: "Outlined",
  variant: "outlined"
};
