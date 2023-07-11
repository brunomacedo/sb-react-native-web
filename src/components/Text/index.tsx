import * as React from 'react';
import type {
  BaseTheme,
  ColorProps,
  OpacityProps,
  SpacingProps,
  SpacingShorthandProps,
  TextShadowProps,
  TypographyProps,
  VariantProps,
  VisibleProps,
} from '@shopify/restyle';
import { createText } from '@shopify/restyle';
import { Animated } from 'react-native';
import type { Text as RNText } from 'react-native';
import { type Theme } from './../../theme/theme';

const $Text = createText<Theme>();

type BaseTextProps<Theme extends BaseTheme> = ColorProps<Theme> &
  OpacityProps<Theme> &
  VisibleProps<Theme> &
  TypographyProps<Theme> &
  SpacingProps<Theme> &
  TextShadowProps<Theme> &
  VariantProps<Theme, 'textVariants'>;

interface IProps {
  bold?: boolean;
  color?: keyof Theme['colors'];
}

export type TextProps<Theme extends BaseTheme> = BaseTextProps<Theme> &
  SpacingShorthandProps<Theme>;

/**
 * `Text` helps us create hierarchies, organize
 * information, and guide our users through pages.
 *
 * #### Usage:
 *
 * ```tsx
  import { Text } from "sb-react-native-webr";

  <Text
    color="philippineGreen"
    variant="body"
  >
    Hello world!
  </Text>
 * ```
 *
 * #### Demo:
 */
export const Text = ({
  children,
  bold = false,
  ...props
}: IProps &
  React.ComponentProps<typeof RNText> & {
    children?: React.ReactNode;
  } & TextProps<Theme>) => {
  if (bold) {
    return (
      <$Text {...props} fontFamily="CaustenRound-Bold">
        {children}
      </$Text>
    );
  }

  return <$Text {...props}>{children}</$Text>;
};

export const AnimatedText = Animated.createAnimatedComponent($Text);
