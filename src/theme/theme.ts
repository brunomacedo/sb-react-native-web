import { createTheme } from '@shopify/restyle';

export const colors = {
  //Primary
  yankeesBlue: '#2B2845',
  green: '#00B56B',
  brandRed: '#FF0136',
  darkBlueGray: '#666A8F',
  ghostWhite: '#FAFBFC',
  white: '#FFFFFF',
  //Secondary
  bleuDeFrance: '#3584E0',
  blueJeans: '#56B0F3',
  blue10: '#EBF3FC',
  brightYellow: '#FF9F26',
  philippineGreen: '#01834E',
  diferente: '#31549E',
  positiva: '#EF909B',
  visionaria: '#F4AA1C',
  cercana: '#5EBD78',
  creativa: '#7255A2',
  sonadora: '#66A0D6',
  productiva: '#37723D',
  extraordinaria: '#FFEDD4',
  transformadora: '#A12822',
  honeydev: '#E5F8F0',
  //Variant Scales
  gray200: '#A2A6BD',
  gray300: '#8084A2',
  gray100: '#C6C9D8',
  gray60: '#DDDFE8',
  gray25: '#EBEDF1',
  gray5: '#F9F9FA',
  //Opacity
  greenWithOpacity: 'rgba(96, 211, 126, 0.2)',
  whiteWithOpacity: 'rgba(250, 251, 252, 0.7)',
  blackWithOpacity: 'rgba(0, 0, 0, 0.8)',
  transparent: 'transparent',
  black: '#363636',
};

export const fonts = {
  caustenRoundBold: 'CaustenRound-Bold',
  caustenRoundRegular: 'CaustenRound-Regular',
};

export const spacing = {
  'spacing-none': 0,
  'spacing-xxxxs': 1,
  'spacing-xxxs': 2,
  'spacing-xxs': 4,
  'spacing-xs': 8,
  'spacing-xms': 12,
  'spacing-s': 16,
  'spacing-xm': 20,
  'spacing-m': 24,
  'spacing-l': 48,
  'spacing-xl': 96,
};

export const theme = createTheme({
  fonts,
  colors,
  spacing,
  breakpoints: {
    phone: 0,
  },
  textVariants: {
    H1: {
      fontSize: 32,
      lineHeight: 36,
      fontFamily: 'CaustenRound-Regular',
    },
    H2: {
      fontSize: 28,
      lineHeight: 32,
      fontFamily: 'CaustenRound-Regular',
    },
    H3: {
      fontSize: 24,
      lineHeight: 28,
      fontFamily: 'CaustenRound-Regular',
    },
    H4: {
      fontSize: 20,
      lineHeight: 24,
      fontFamily: 'CaustenRound-Regular',
    },
    SubTitle: {
      fontSize: 18,
      lineHeight: 22,
      fontFamily: 'CaustenRound-Regular',
    },
    body: {
      fontSize: 16,
      lineHeight: 20,
      fontFamily: 'CaustenRound-Regular',
    },
    mediumBody: {
      fontSize: 14,
      lineHeight: 18,
      fontFamily: 'CaustenRound-Regular',
    },
    label: {
      fontSize: 12,
      lineHeight: 16,
      fontFamily: 'CaustenRound-Regular',
    },
    SubHead: {
      fontSize: 10,
      lineHeight: 14,
      fontFamily: 'CaustenRound-Regular',
    },
  },
  buttonVariants: {
    primary: {
      backgroundColor: 'green',
    },
    light: {
      backgroundColor: 'white',
    },
    disabled: {
      backgroundColor: 'gray100',
    },
    outlined: {
      backgroundColor: 'white',
      borderColor: 'gray60',
      borderWidth: 1,
    },
    outlinedDisabled: {
      backgroundColor: 'gray5',
      borderColor: 'gray60',
      borderWidth: 1,
    },
    outlinedPrimary: {
      backgroundColor: 'white',
      borderColor: 'green',
      borderWidth: 1,
    },
  },
  badgeVariants: {
    primary: {
      backgroundColor: 'green',
    },
    danger: {
      backgroundColor: 'brandRed',
    },
    light: {
      backgroundColor: 'white',
    },
    disabled: {
      backgroundColor: 'gray100',
    },
    outlined: {
      backgroundColor: 'white',
      borderColor: 'gray60',
      borderWidth: 1,
    },
    outlinedPrimary: {
      backgroundColor: 'white',
      borderColor: 'green',
      borderWidth: 1,
    },
  },
});

export type Theme = typeof theme;
