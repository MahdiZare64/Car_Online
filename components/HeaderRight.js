import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { useColorMode } from "native-base";
import Colors from "../assets/Colors";

export default function HeaderRight({ isBgColored, navigation }) {
  const { colorMode } = useColorMode();
  return (
    <View
      style={{
        right: 10,
        marginTop: 15,
        flexDirection: "row-reverse",
      }}
    >
      <TouchableOpacity onPress={navigation.openDrawer}>
        <View
          style={{
            borderRadius: 50,
            padding: 5,
            elevation: colorMode === "light" ? 0 : 15,
            backgroundColor:
              colorMode === "light"
                ? isBgColored
                  ? "#fff"
                  : Colors.primary
                : "transparent",
          }}
        >
          <Ionicons
            name="menu"
            size={28}
            color={
              isBgColored
                ? colorMode === "light"
                  ? Colors.primary
                  : Colors.light
                : "#fff"
            }
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("hmmmmm")}>
        <View style={{ padding: 7 }}>
          <SimpleLineIcons
            name="bell"
            size={23}
            color={
              isBgColored ? "#fff" : colorMode === "light" ? "#000" : "#fff"
            }
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
