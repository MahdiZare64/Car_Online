import React from "react";
import { View } from "native-base";

export default function Wrapper({ children,...props }) {
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
