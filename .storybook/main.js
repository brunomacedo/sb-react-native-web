let addons = [];
let stories = [];

if (!Boolean(process.env.STORYBOOK_ENABLED)) {
  stories.push("../src/**/*.mdx");
  addons.push(
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-react-native-web",
  );
}

module.exports = {
  addons,
  stories: [
    ...stories,
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  staticDirs: [
    "../public",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: true,
    docsMode: !Boolean(process.env.STORYBOOK_ENABLED),
  },
}
