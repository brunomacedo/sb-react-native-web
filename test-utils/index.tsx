import React, { ReactElement } from "react";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "../src/theme/ThemeProvider";

const AllTheProviders = ({ children }: { children: ReactElement }) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

const customRender = (component: ReactElement, options = {}) => (
  render(component, {
    wrapper: AllTheProviders, ...options
  })
);

// re-export everything
export * from "@testing-library/react-native"

// override render method
export { customRender as render }
