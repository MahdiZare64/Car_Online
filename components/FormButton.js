import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "native-base";

export default function FormButton({ onPress, label, isReturn }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={styles.wrapper}
        _dark={{ bg: isReturn ? "colors.lightGray" : "colors.secondary" }}
        _light={{ bg: isReturn ? "colors.gray" : "colors.primary" }}
      >
        <Text style={styles.text}>{label || "بدون متن"}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 35,
    paddingVertical: 7,
    borderRadius: 25,
  },
  text: {
    fontFamily: "Peyda",
    color: "#fff",
  },
});
