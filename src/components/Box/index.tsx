import { createBox } from '@shopify/restyle';
import Reanimated from 'react-native-reanimated';
import { Animated } from 'react-native';

import type { Theme } from './../../theme/theme';

export const Box = createBox<Theme>();
export const AnimatedBox = Animated.createAnimatedComponent(Box);
export const ReanimatedBox = Reanimated.createAnimatedComponent(Box);
export type BoxProps = React.ComponentProps<typeof Box>;
