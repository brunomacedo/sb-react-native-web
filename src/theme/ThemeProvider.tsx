import * as React from 'react';
import type { ReactElement } from 'react';
import { ThemeProvider as RestyleThemeProvider } from '@shopify/restyle';
import { theme } from './theme';
import type { Theme } from './theme';

interface ThemeProviderProps {
  children?: ReactElement;
}

export const useTheme = (): Theme => {
  return { ...theme };
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <RestyleThemeProvider theme={theme}>
      {children}
    </RestyleThemeProvider>
  );
};
