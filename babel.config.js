const path = require('path');
const pak = require('./package.json');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [['babel-preset-expo', { jsxRuntime: 'classic' }]],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            // For development, we want to alias the library to the source
            [pak.name]: path.join(__dirname, '.', pak.source),
          },
        },
      ],
    ],
  };
};