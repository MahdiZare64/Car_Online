import React from "react";
import { StyleSheet } from "react-native";
import { useColorMode, View } from "native-base";

import { DrawerItem } from "@react-navigation/drawer";

export default function DrawerNavigationItem({
  label,
  icon,
  navigateRoute,
  navigation,
  navigateParams,
}) {
  const { colorMode } = useColorMode();
  return (
    <DrawerItem
      label={label}
      icon={() => (
        <View right="10px" position="absolute">
          {icon}
        </View>
      )}
      labelStyle={[
        styles.label,
        colorMode === "light" ? styles.darkText : styles.lightText,
      ]}
      onPress={() => navigation.navigate(navigateRoute, navigateParams)}
    />
  );
}

const styles = StyleSheet.create({
  label: {
    fontFamily: "Peyda",
    marginRight: 10,
  },
  lightText: {
    color: "#fff",
  },
  darkText: {
    color: "#333",
  },
});
