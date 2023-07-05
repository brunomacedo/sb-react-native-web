import { Dimensions, PixelRatio } from 'react-native';

export const WIDTH = 360;
export const HEIGHT = 640;

export const GetScale = () => {
  const { width: SCREEN_WIDTH } = Dimensions.get('window');
  const scale = SCREEN_WIDTH / WIDTH;
  return scale;
};

export const Normalize = (size: number) => {
  const newSize = size * GetScale();
  const sizeRatio = Math.round(PixelRatio.roundToNearestPixel(newSize));
  return sizeRatio;
};
