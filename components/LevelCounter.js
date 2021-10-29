import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "native-base";

const InActiveCircle = ({ num }) => (
  <View
    style={styles.circle}
    shadow="5"
    _dark={{ bg: "colors.dark" }}
    _light={{ bg: "colors.light" }}
  >
    <Text
      style={styles.text}
      _dark={{ color: "colors.light" }}
      _light={{ color: "colors.dark" }}
    >
      {num}
    </Text>
  </View>
);

const ActiveCircle = ({ num }) => (
  <View
    style={styles.circle}
    shadow="5"
    _dark={{ bg: "colors.secondary" }}
    _light={{ bg: "colors.primary" }}
  >
    <Text style={styles.text} color="colors.light">
      {num}
    </Text>
  </View>
);

export default function LevelCounter({ level }) {
  const Final = level === 2 ? ActiveCircle : InActiveCircle;
  return (
    <View style={styles.wrapper}>
      <ActiveCircle num="1" />

      <View style={[styles.smallCircle, styles.filled]} />
      <View style={[styles.smallCircle, styles.filled]} />
      <View style={[styles.smallCircle, styles.filled]} />

      <View style={[styles.smallCircle, level === 2 && styles.filled]} />
      <View style={[styles.smallCircle, level === 2 && styles.filled]} />
      <View style={[styles.smallCircle, level === 2 && styles.filled]} />

      <Final num="2" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    marginHorizontal: 5,
  },
  text: {
    fontFamily: "Peyda",
  },
  smallCircle: {
    width: 5,
    height: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000",
    marginHorizontal: 2.5,
  },
  filled: {
    backgroundColor: "#000",
  },
});
