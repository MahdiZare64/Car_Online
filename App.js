import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import MainNavigator from "./navigation/MainNavigator";
import ColorModeManager from "./utils/ColorModeManager";

import { I18nManager } from "react-native";
import { Restart } from "fiction-expo-restart";

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
  //  env test
  // vaghti env taghit mikne bayad stop kni va expo start -c ro bzni
  if (!font) {
    return <AppLoading />;
  } else {
    return (
      <ColorModeManager>
        <MainNavigator />
      </ColorModeManager>
    );
  }
}

// Color Switch Component
