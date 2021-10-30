import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "native-base";

export default function PriceCardsBox({ price, downPrice, topPrice }) {
  return (
    <View style={styles.wrapper}>
      <View
        style={styles.secondaryBox}
        _dark={{ bg: "colors.gray" }}
        _light={{ bg: "colors.lightBg" }}
      >
        <Text textAlign="center" fontFamily="Peyda" fontSize="xs">
          حد پایین
        </Text>
        <Text textAlign="center" fontFamily="Peyda" fontSize="sm">
          {downPrice || 0}
        </Text>
        <Text textAlign="center" fontFamily="Peyda" fontSize="sm">
          تومان
        </Text>
      </View>

      <View
        style={styles.mainBox}
        _dark={{ bg: "colors.primary" }}
        _light={{ bg: "colors.secondary" }}
      >
        <Text textAlign="center" fontFamily="Peyda" fontSize="sm">
          قیمت کارشناسی
        </Text>
        <Text textAlign="center" fontFamily="Peyda" fontSize="md">
          {price || 0}
        </Text>
        <Text textAlign="center" fontFamily="Peyda" fontSize="md">
          تومان
        </Text>
      </View>

      <View
        style={styles.secondaryBox}
        _dark={{ bg: "colors.gray" }}
        _light={{ bg: "colors.lightBg" }}
      >
        <Text textAlign="center" fontFamily="Peyda" fontSize="xs">
          حد بالا
        </Text>
        <Text textAlign="center" fontFamily="Peyda" fontSize="sm">
          {topPrice || 0}
        </Text>
        <Text textAlign="center" fontFamily="Peyda" fontSize="sm">
          تومان
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  mainBox: {
    width: "35%",
    aspectRatio: 1,
    borderRadius: 15,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  secondaryBox: {
    width: "29%",
    aspectRatio: 1,
    borderRadius: 15,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
});
