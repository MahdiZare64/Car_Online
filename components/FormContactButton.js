import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View, useColorMode } from "native-base";
import * as Linking from "expo-linking";

import { Feather } from "@expo/vector-icons";

export default function FormContactButton({ style, link }) {
  const { colorMode } = useColorMode();
  const [shown, isShown] = useState(true);
  return (
    <View style={[styles.wrapper, style]}>
      <TouchableOpacity onPress={() => isShown(!shown)}>
        <View
          style={styles.eyeHolder}
          _dark={{ bg: "colors.gray" }}
          _light={{ bg: "colors.light" }}
        >
          <Feather
            name={shown ? "eye-off" : "eye"}
            size={24}
            color={colorMode === "light" ? "black" : "white"}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => Linking.openURL(link)}
        style={{ flex: 1 }}
      >
        <View
          style={styles.contactBg}
          _dark={{ bg: "colors.gray" }}
          _light={{ bg: "colors.light" }}
          opacity={shown ? 1 : 0}
        >
          <Text
            fontFamily="Peyda"
            fontSize="md"
            _dark={{ color: "colors.light" }}
            _light={{ color: "colors.dark" }}
          >
            تماس با کارشناس
          </Text>

          <Feather
            name="phone-call"
            size={22}
            color={colorMode === "light" ? "black" : "white"}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 20,
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  contactBg: {
    height: 46,
    borderRadius: 23,
    flex: 1,
    marginVertical: 10,
    elevation: 5,
    paddingHorizontal: 15,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
  },
  eyeHolder: {
    elevation: 5,
    width: 46,
    height: 46,
    borderRadius: 23,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
  },
});
