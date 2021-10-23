import React, { useEffect } from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import MainNavigator from "./navigation/BottomTab";

import { I18nManager } from "react-native";
import { Restart } from "fiction-expo-restart";

// Define the config

// extend the theme
import Colors from "./assets/Colors";
const theme = extendTheme({
  colors: {
    colors: Colors,
  },
  config: {
    initialColorMode: "light",
  },
});

export default function App() {
  const [font] = useFonts({
    Bnazanin: require("./assets/fonts/Bnazanin.ttf"),
    BnazaninBold: require("./assets/fonts/BNazaninBold.ttf"),
    Peyda: require("./assets/fonts/Peyda-Regular.ttf"),
    PeydaBold: require("./assets/fonts/Peyda-Bold.ttf"),
    PeydaLight: require("./assets/fonts/peyda-light.ttf"),
  });

  useEffect(() => {
    if (I18nManager.isRTL) {
      I18nManager.allowRTL(false);
      I18nManager.forceRTL(false);
      Restart();
    }
  });

  if (!font) {
    return <AppLoading />;
  } else {
    return (
      <NativeBaseProvider theme={theme}>
        <MainNavigator />
      </NativeBaseProvider>
    );
  }
}

// Color Switch Component
