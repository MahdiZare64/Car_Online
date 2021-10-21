import React, { useState } from "react";
import { View, Text, Input } from "native-base";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CustomInput({ width, placeholder }) {
  const [focused, useFocused] = useState(false);
  return (
    <View
      backgroundColor="colors.light"
      width={width || "100%"}
      borderRadius={25}
      height="50"
      flexDirection="row-reverse"
      paddingX="25"
      alignItems="center"
      shadow={focused && 6}
    >
      <Ionicons name="search" size={24} color="black" />
      <Input
        borderWidth={0}
        color="colors.dark"
        isFullWidth
        placeholder={placeholder || "جستجو کنید"}
        fontFamily="Peyda"
        fontSize="13"
        _focus={() => useFocused(!focused)}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
