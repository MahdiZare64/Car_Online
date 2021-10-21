import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View } from "native-base";

import { FontAwesome } from "@expo/vector-icons";

export default function FilterButton({ color, style }) {
  return (
    <TouchableOpacity onPress={() => console.log("pressed!")}>
      <View style={{ ...styles.container, ...style }}>
        <FontAwesome name="filter" size={24} color={color || "white"} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 25,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
