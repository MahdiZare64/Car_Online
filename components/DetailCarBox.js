import React from "react";
import { useWindowDimensions } from "react-native";
import { Text, View } from "native-base";

export default function DetailCarBox({ label, value }) {
  const { width } = useWindowDimensions();
  return (
    <View
      height={width * 0.3}
      width={width * 0.3}
      borderRadius="25px"
      paddingX="10px"
      paddingY="15px"
      marginBottom="25px"
      shadow="7"
      _dark={{ backgroundColor: "colors.dark" }}
      _light={{ backgroundColor: "colors.secondary" }}
      justifyContent="space-between"
    >
      <Text
        _dark={{ color: "colors.lightGray" }}
        _light={{ color: "colors.light" }}
        textAlign="center"
        fontFamily="Peyda"
        fontSize="sm"
      >
        {label}
      </Text>

      <Text
        color="colors.light"
        textAlign="center"
        fontFamily="Peyda"
        fontSize="md"
      >
        {value}
      </Text>
    </View>
  );
}
