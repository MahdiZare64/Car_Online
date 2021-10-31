import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const ToastConfig = {
  success: ({ text2, props, ...rest }) => (
    <View
      style={[styles.toastView, styles.shadows, { backgroundColor: "green" }]}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <View style={{ alignSelf: "flex-end" }}>
          <Text style={[styles.text, { fontSize: 20 }]}>{text2}</Text>
          <Text>{props.guid}</Text>
        </View>
        <Ionicons
          name="checkmark-circle-outline"
          style={{ marginHorizontal: 10 }}
          size={45}
          color="white"
        />
      </View>
    </View>
  ),

  error: ({ text2, props, ...rest }) => (
    <View
      style={[styles.toastView, styles.shadows, { backgroundColor: "#FF0000" }]}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <View style={{ alignSelf: "flex-end" }}>
          <Text style={[styles.text, { fontSize: 20 }]}>{text2}</Text>
          <Text>{props.guid}</Text>
        </View>
        <Ionicons
          name="warning-outline"
          style={{ marginHorizontal: 10 }}
          size={45}
          color="white"
        />
      </View>
    </View>
  ),
  info: ({ text2, props, ...rest }) => (
    <View
      style={[styles.toastView, styles.shadows, { backgroundColor: "#0073ff" }]}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <View style={{ alignSelf: "center", justifyContent: "center" }}>
          <Text style={[styles.text, { fontSize: 20 }]}>{text2}</Text>
          <Text>{props.guid}</Text>
        </View>
        <Ionicons
          name="information-circle-outline"
          style={{ marginHorizontal: 10 }}
          size={45}
          color="white"
        />
      </View>
    </View>
  ),
  any_custom_type: () => {},
};

const styles = StyleSheet.create({
  toastView: {
    width: Dimensions.get("screen").width,
    paddingVertical: 10,
    alignSelf: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "right",
    fontFamily: "BnazaninBold",
    color: "white",
    marginLeft: 80,
  },
  shadows: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 12,
  },
});
