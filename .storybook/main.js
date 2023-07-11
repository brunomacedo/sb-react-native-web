let addons = [];
let stories = ["../src/**/*.stories.@(js|jsx|ts|tsx)"];

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
  stories,
  staticDirs: [
    "../public",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
}
