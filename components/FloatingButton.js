import React from "react";
import { View, Text } from "native-base";
import { TouchableOpacity } from "react-native";

export default function FloatingButton() {
  return (
      <View position="absolute" bottom="50px" width="100%" alignItems="center">
    <TouchableOpacity>

        <View
          width="140px"
          height="30px"
          borderRadius="25px"
          _light={{ bg: "colors.primary" }}
          _dark={{ bg: "colors.secondary" }}
          justifyContent="center"
        >
          <Text
            fontFamily="Peyda"
            fontSize="sm"
            color="colors.light"
            textAlign="center"
          >
            در خواست کارشناسی
          </Text>
        </View>
    </TouchableOpacity>
      </View>
  );
}
