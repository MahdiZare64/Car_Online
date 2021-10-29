import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View, useColorMode, Image } from "native-base";

import { Entypo } from "@expo/vector-icons";

export default function FormCarSelect({
  label,
  navigation,
  carSelected,
  image,
  name,
  price,
}) {
  const { colorMode } = useColorMode();

  const onPressHandler = () => {
    navigation.navigate("carSelect");
  };

  return (
    <>
      {carSelected ? (
        <View style={styles.selectedWrapper}>
          <Text style={styles.title} fontSize="xs">
            خودروی انتخابی شما
          </Text>
          <TouchableOpacity onPress={onPressHandler}>
            <View
              style={styles.selectedCard}
              _dark={{ bg: "colors.gray" }}
              _light={{ bg: "colors.light" }}
            >
              <Image
                source={image || require("../assets/img/car1.png")}
                resizeMode="contain"
                width="50%"
              />
              <View style={styles.textWrapper}>
                <Text style={styles.carText} fontSize="md" textAlign="center">
                  {name || "بدون عنوان"}
                </Text>
                <View style={styles.line} />
                <Text style={styles.carText} fontSize="xs">
                  هزینه کارشناسی کامل
                </Text>
                <Text style={styles.carText} fontSize="xs">
                  {price ? price + " تومان " : "بدون قیمت"}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity onPress={onPressHandler}>
          <View
            style={styles.inputBg}
            _dark={{ bg: "colors.gray" }}
            _light={{ bg: "colors.light" }}
          >
            <Text style={styles.label} fontSize="md">
              {label}
            </Text>

            <Entypo
              name="chevron-down"
              size={26}
              color={colorMode === "light" ? "black" : "white"}
            />
          </View>
        </TouchableOpacity>
      )}
    </>
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
    justifyContent: "space-between",
  },
  label: {
    fontFamily: "Peyda",
    direction: "rtl",
    textAlign: "right",
  },
  selectedWrapper: {
    marginVertical: 10,
  },
  title: {
    fontFamily: "PeydaBold",
  },
  selectedCard: {
    height: 100,
    borderRadius: 20,
    elevation: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 8,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textWrapper: {
    width: "50%",
  },
  carText: {
    fontFamily: "Peyda",
    marginHorizontal: 10,
  },
  line: {
    borderTopWidth: 2,
    borderTopColor: "#707070",
    width: "100%",
    marginVertical: 5,
  },
});
