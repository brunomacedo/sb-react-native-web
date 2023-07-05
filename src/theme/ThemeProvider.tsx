import * as React from 'react';
import type { ReactElement } from 'react';
import { ThemeProvider as ThemeProviderRS } from '@shopify/restyle';
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
    <ThemeProviderRS theme={theme}>
      {children}
    </ThemeProviderRS>
  );
};
