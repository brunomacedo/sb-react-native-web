import React from "react";
import { useFonts } from 'expo-font';
import { ThemeProvider } from "./src/theme/ThemeProvider";
import { Wrapper } from "./src/components/Wrapper";
import { Button } from "./src/components/Button";

const App = () => {
  const [loaded] = useFonts({
    'CaustenRound-Bold': require('./assets/fonts/CaustenRound-Bold.otf'),
    'CaustenRound-Regular': require('./assets/fonts/CaustenRound-Regular.otf'),
  });

  if (!loaded) return null;

  return (
    <ThemeProvider>
      <Wrapper>
        <Button label="Text" onPress={() => { }} />
        <Button
          label="Text"
          onPress={() => { }}
          marginTop="spacing-m"
          loading
        />
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
