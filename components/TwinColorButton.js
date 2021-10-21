import React from "react";
import { View, Text } from "native-base";
import { TouchableOpacity } from "react-native";

export default function TwinColorButton({
  isRight,
  label,
  onPress,
  small,
  ...props
}) {
  return (
    <View width="120px" {...props}>
      <TouchableOpacity onPress={onPress}>
        <View
          _dark={{ backgroundColor: "colors.primary" }}
          _light={{ backgroundColor: "colors.secondary" }}
          height={small ? "40px" : "60px"}
          width={small ? "80px" : "120px"}
          borderRadius={small ? "15px" : "23px"}
          justifyContent="center"
        >
          <View
            height={small ? "40px" : "60px"}
            width={small ? "40px" : "70px"}
            _dark={{ backgroundColor: "colors.secondary" }}
            _light={{ backgroundColor: "colors.primary" }}
            borderRadius={small ? "15px" : "23px"}
            position="absolute"
            right={isRight && 0}
          ></View>
          <Text
            alignSelf="center"
            fontFamily="Peyda"
            color="colors.light"
            fontSize={small ? "xs" : "md"}
            textAlign="center"
          >
            {label}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
