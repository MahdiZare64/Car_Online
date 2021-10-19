import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import BottomTab from "./navigation/BottomTab";

// Define the config

// extend the theme
import Colors from "./assets/Colors";
const theme = extendTheme({
  colors: {
    colors: Colors,
  },
  config: {
    initialColorMode: "dark",
  },
});

export default function App() {
  const [font] = useFonts({
    Bnazanin: require("./assets/fonts/Bnazanin.ttf"),
    BnazaninBold: require("./assets/fonts/BNazaninBold.ttf"),
  });

  if (!font) {
    return <AppLoading />;
  } else {
    return (
      <NativeBaseProvider theme={theme}>
        <BottomTab />
      </NativeBaseProvider>
    );
  }
}

// Color Switch Component
