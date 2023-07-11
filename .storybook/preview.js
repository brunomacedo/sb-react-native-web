import React from "react";
import { ThemeProvider } from "../src/theme/ThemeProvider"
import { Wrapper } from "../src/components/Wrapper";

export const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Wrapper bg="white">
        <Story />
      </Wrapper>
    </ThemeProvider>
  ),
];
