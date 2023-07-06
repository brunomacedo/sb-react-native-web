import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  withRepeat,
} from 'react-native-reanimated';
import { colors } from '../../theme/theme';
import { Box } from '../Box';
import { Normalize } from '../../utils/normalize';

interface IProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}
/**
 * This is a custom spinner loader that uses Animated API to create a circular spinner
 * @param variant - The color of the spinner (primary or secondary) - default is primary
 * @param size - The size of the spinner (small, medium or large) - default is medium
 */
export const Spinner = ({ variant = 'primary', size = 'medium' }: IProps) => {
  const rotation = useSharedValue(0);

  const spinnerSize = React.useMemo(
    () => ({
      small: Normalize(22),
      medium: Normalize(26),
      large: Normalize(30),
    }),
    []
  );
  const spinnerColor = React.useMemo(
    () => ({
      primary: colors.white,
      secondary: colors.green,
    }),
    []
  );

  const sizeStyle = {
    width: spinnerSize[size],
    height: spinnerSize[size],
  };
  const colorStyle = {
    borderColor: spinnerColor[variant],
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${rotation.value * 360}deg`,
        },
      ],
    };
  });

  React.useEffect(() => {
    rotation.value = withRepeat(
      withTiming(1, {
        duration: 1000,
        easing: Easing.linear,
      }),
      -1
    );
  }, [rotation, rotation.value]);

  return (
    <Box style={styles.container}>
      <Animated.View
        style={[styles.spinner, animatedStyles, sizeStyle, colorStyle]}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  spinner: {
    borderRadius: 50,
    borderWidth: 2,
    borderBottomColor: 'transparent',
    position: 'absolute',
  },
});
