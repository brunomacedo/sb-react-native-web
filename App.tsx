import React from "react";
import { LogBox } from "react-native";
import { useFonts } from 'expo-font';
import { User } from "phosphor-react-native";

import { ThemeProvider } from "./src/theme/ThemeProvider";
import { Wrapper } from "./src/components/Wrapper";
import { Button } from "./src/components/Button";
import { theme } from "./src/theme/theme";

const App = () => {
  LogBox.ignoreLogs(['EventEmitter.removeListener']);

  const [loaded] = useFonts({
    'CaustenRound-Bold': require('./assets/fonts/CaustenRound-Bold.otf'),
    'CaustenRound-Regular': require('./assets/fonts/CaustenRound-Regular.otf'),
  });

  if (!loaded) return null;

  return (
    <ThemeProvider>
      <Wrapper>
        <Button
          label="Text"
          onPress={() => { }}
        />
        <Button
          label="Text"
          onPress={() => { }}
          marginTop="spacing-m"
          loading
        />
        <Button
          label="Text"
          onPress={() => { }}
          marginTop="spacing-m"
          icon={(
            <User
              weight="bold"
              color={theme.colors.white}
              size={14}
            />)
          }
        />
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
