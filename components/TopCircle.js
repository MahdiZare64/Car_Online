import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { View } from "native-base";

export default function TopCircle() {
  return (
    <View
      style={styles.circle}
      _dark={{ backgroundColor: "colors.secondary" }}
      _light={{ backgroundColor: "colors.primary" }}
    ></View>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: Dimensions.get("screen").width * 1.5,
    height: Dimensions.get("screen").width * 1.5,
    borderRadius: Dimensions.get("screen").width * 0.75,
    left: Dimensions.get("screen").width * -0.25,
    top: Dimensions.get("screen").width * -0.6,
    position: "absolute",
  },
});
