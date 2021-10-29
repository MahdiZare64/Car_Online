import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { View } from "native-base";

export default function TopCircle({ top }) {
  return (
    <View
      style={styles.circle}
      _dark={{ backgroundColor: "colors.secondary" }}
      _light={{ backgroundColor: "colors.primary" }}
      top={Dimensions.get("screen").width * (top || -0.6)}
    ></View>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: Dimensions.get("screen").width * 1.5,
    height: Dimensions.get("screen").width * 1.5,
    borderRadius: Dimensions.get("screen").width * 0.75,
    left: Dimensions.get("screen").width * -0.25,
    position: "absolute",
  },
});
