import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { useColorMode } from "native-base";

export default function ChangeThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <View style={{ left: 10, marginTop: 15 }}>
      <TouchableOpacity onPress={toggleColorMode}>
        {colorMode === "light" ? (
          <FontAwesome5 name="moon" size={24} color="black" />
        ) : (
          <Feather name="sun" size={26} color="white" />
        )}
      </TouchableOpacity>
    </View>
  );
}
