import React from 'react';
import { LogBox } from 'react-native';
import { useFonts } from 'expo-font';
import Storybook from './.storybook';

const App = () => {
  LogBox.ignoreAllLogs();

  const [loaded] = useFonts({
    'CaustenRound-Bold': require('./assets/fonts/CaustenRound-Bold.otf'),
    'CaustenRound-Regular': require('./assets/fonts/CaustenRound-Regular.otf'),
  });

  if (!loaded) return null;

  return <Storybook />;
};

export default App;
