export default ({ config }) => ({
  ...config,
  name: "Storybook React Native Web",
  slug: "sb-react-native-web",
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
});
