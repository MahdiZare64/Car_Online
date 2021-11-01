import React from "react";
import { StyleSheet } from "react-native";
import { Text, View, Input } from "native-base";

export default function FormInput({
  label,
  placeholder,
  onChangeText,
  value,
  ...props
}) {
  return (
    <View
      style={styles.inputBg}
      _dark={{ bg: "colors.gray" }}
      _light={{ bg: "colors.light" }}
    >
      <Text style={styles.label} fontSize="md">
        {label}
      </Text>
      <Input
        onChangeText={onChangeText}
        style={styles.input}
        placeholder={placeholder}
        value={value}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputBg: {
    height: 46,
    borderRadius: 20,
    width: "100%",
    marginVertical: 10,
    elevation: 5,
    paddingHorizontal: 15,
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  label: {
    fontFamily: "Peyda",
    direction: "rtl",
    textAlign: "right",
  },
  input: {
    flex: 1,
    borderWidth: 0,
    textAlign: "right",
  },
});
