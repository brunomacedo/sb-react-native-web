import React from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';
import {
  useRestyle,
  spacing,
  border,
  backgroundColor,
  createVariant,
  VariantProps,
  createRestyleComponent,
  composeRestyleFunctions,
} from '@shopify/restyle';
import { Text } from '../Text';
import { Box } from '../Box';

import { Normalize } from '../../utils/normalize';

import { useTheme } from '../../theme/ThemeProvider';
import type { Theme } from '../../theme/theme';
import type { theme } from '../../theme/theme';

type ButtonProps = React.ComponentProps<typeof ButtonContainer> & {
  label?: string;
  type?: TypeButton;
  icon?: React.ReactNode;
  loading?: boolean;
  onPress: (event: GestureResponderEvent) => void;
};

type TypeButton = 'large' | 'medium' | 'small';

// const restyleFunctions = [spacing, border, backgroundColor];

const restyleFunctions = composeRestyleFunctions([
  spacing,
  border,
  backgroundColor,
]);

const ButtonContainer = createRestyleComponent<
  VariantProps<Theme, 'buttonVariants'> &
    React.ComponentProps<typeof Box> & {
      disabled?: boolean;
    },
  Theme
>(
  [
    createVariant({
      themeKey: 'buttonVariants',
    }),
  ],
  Box
);

const colorText: {
  [key in keyof typeof theme.buttonVariants]: keyof typeof theme.colors;
} = {
  primary: 'white',
  disabled: 'white',
  outlinedDisabled: 'gray60',
  outlined: 'darkBlueGray',
  outlinedPrimary: 'green',
  light: 'darkBlueGray',
};

const typeButton: { [key in TypeButton]: number } = {
  large: Normalize(48),
  medium: Normalize(40),
  small: Normalize(32),
};

export const Button: React.FC<ButtonProps> = ({
  onPress = () => console.warn('onPress is a required field'),
  label,
  disabled,
  variant = 'primary',
  type = 'large',
  loading = false,
  icon,
  ...rest
}) => {
  const props = useRestyle(restyleFunctions, rest);

  const { fonts } = useTheme();
  const isOutlinedDisabled = disabled && variant === 'outlined';

  const variantButton = isOutlinedDisabled
    ? 'outlinedDisabled'
    : disabled
    ? 'disabled'
    : variant;
  let textColor: keyof typeof theme.colors = 'white';

  let minHeight = typeButton.large;

  if (typeof variant !== 'object' && variant) {
    textColor = colorText[isOutlinedDisabled ? 'outlinedDisabled' : variant];
    minHeight = typeButton[type];
  }

  return (
    <TouchableOpacity onPress={onPress} disabled={loading || disabled}>
      <ButtonContainer
        variant={variantButton}
        minHeight={minHeight}
        width="100%"
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
        borderRadius={Normalize(4)}
        {...props}
      >
        <Text
          color={textColor}
          variant="body"
          fontFamily={fonts.caustenRoundBold}
          fontSize={16}
        >
          {label}
        </Text>
      </ButtonContainer>
    </TouchableOpacity>
  );
};
