import React, { useLayoutEffect } from "react";
import { View } from "native-base";

import ChangeThemeButton from "./ChangeThemeButton";
import HeaderRight from "./HeaderRight";

export default function Wrapper({ children, navigation, ...props }) {
  useLayoutEffect(() => {
    if (navigation) {
      navigation.setOptions({
        headerRight: () => <HeaderRight isBgColored />,
        headerLeft: () => <ChangeThemeButton isBgColored />,
      });
    }
  }, [navigation]);
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
