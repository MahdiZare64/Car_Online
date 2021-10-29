import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Colors from "../assets/Colors";
const theme = extendTheme({
  colors: {
    colors: Colors,
  },
  config: {
    initialColorMode: "light",
  },
});

const colorModeManager = {
  get: async () => {
    try {
      let val = await AsyncStorage.getItem("@color-mode");
      return val === "dark" ? "dark" : "light";
    } catch (e) {
      return "light";
    }
  },
  set: async (value) => {
    try {
      await AsyncStorage.setItem("@color-mode", value);
    } catch (e) {
      console.log(e);
    }
  },
};
export default function (props) {
  return (
    <NativeBaseProvider colorModeManager={colorModeManager} theme={theme}>
      {props.children}
    </NativeBaseProvider>
  );
}
