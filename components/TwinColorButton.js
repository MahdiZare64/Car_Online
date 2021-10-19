import React from "react";
import { View, Text } from "native-base";
import { TouchableOpacity } from "react-native";

export default function TwinColorButton({ isRight, label, onPress,...props }) {
  return (
    <View width="120px" {...props}>
      <TouchableOpacity onPress={onPress}>
        <View
          _dark={{ backgroundColor: "colors.primary" }}
          _light={{ backgroundColor: "colors.secondary" }}
          height="60px"
          width="120px"
          borderRadius="23px"
          justifyContent="center"
        >
          <View
            height="60px"
            width="70px"
            _dark={{ backgroundColor: "colors.secondary" }}
            _light={{ backgroundColor: "colors.primary" }}
            borderRadius="23px"
            position="absolute"
            right={isRight && 0}
          ></View>
          <Text
            alignSelf="center"
            fontFamily="Bnazanin"
            color="colors.light"
            fontSize="md"
          >
            {label}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
