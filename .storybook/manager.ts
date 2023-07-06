import { addons } from "@storybook/addons";
// import startCase from 'lodash/startCase';
import theme from "./theme"

addons.setConfig({
  theme,
  isFullscreen: false,
  enableShortcuts: false,
  // showToolbar: false,
  // showTabs: false,
  // sidebar: {
  //   showRoots: false,
  //   renderLabel: ({ name, type }) => (
  //     type === 'story' ? name.replaceAll(" ", "") : startCase(name)
  //   ),
  // },
});
