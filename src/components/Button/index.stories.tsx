import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { User } from 'phosphor-react-native';
import { Button as Component, ThemeProvider, theme } from 'sb-react-native-web';

export default {
  title: 'Components/Button',
  component: Component,
  args: {
    label: 'Primary',
    variant: 'primary',
    type: 'small',
  },
} as Meta<typeof Component>;

export const Primary: StoryFn<typeof Component> = (args) => (
  /** TODO: Wrapper storybook globally with `ThemeProvider` */
  <ThemeProvider>
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
  </ThemeProvider>
);

export const Outlined: StoryFn<typeof Component> = (args) => (
  <ThemeProvider>
    <Component {...args} />
  </ThemeProvider>
);

Outlined.args = {
  label: "Outlined",
  variant: "outlined"
};
