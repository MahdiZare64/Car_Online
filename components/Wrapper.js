import React, { useLayoutEffect } from "react";
import { View } from "native-base";

// colors
import { useColorMode } from "native-base";
import Colors from "../assets/Colors";

import ChangeThemeButton from "./ChangeThemeButton";
import HeaderRight from "./HeaderRight";

export default function Wrapper({
  children,
  ...props
}) {
  return (
    <View
      _dark={{ backgroundColor: "colors.dark" }}
      _light={{ backgroundColor: "colors.light" }}
      flex={1}
      paddingTop={100}
      paddingBottom={41}
      {...props}
    >
      {children}
    </View>
  );
}
