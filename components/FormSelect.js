import React from "react";
import { StyleSheet } from "react-native";
import { View, useColorMode } from "native-base";

import SelectDropdown from "react-native-select-dropdown";
import { Entypo } from "@expo/vector-icons";
const countries = [
  "البرز",
  "تهران",
  "مازندران",
  "تبریز",
  "البرز",
  "تهران",
  "مازندران",
  "تبریز",
  "البرز",
  "تهران",
  "مازندران",
  "تبریز",
  "البرز",
  "تهران",
  "مازندران",
  "تبریز",
  "البرز",
  "تهران",
  "مازندران",
  "تبریز",
  "البرز",
  "تهران",
  "مازندران",
  "تبریز",
  "البرز",
  "تهران",
  "مازندران",
  "تبریز",
  "البرز",
  "تهران",
  "مازندران",
  "تبریز",
];

export default function FormSelect({ placeholder, ...props }) {
  const { colorMode } = useColorMode();
  return (
    <View>
      <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={(selectedItem) => selectedItem}
        rowTextForSelection={(item) => item}
        buttonStyle={[
          styles.button,
          colorMode === "light" ? styles.lightBg : styles.darkBg,
        ]}
        buttonTextStyle={[
          styles.buttonText,
          colorMode === "light" ? styles.darkText : styles.lightText,
        ]}
        dropdownStyle={styles.dropDown}
        defaultButtonText={placeholder || "بدون عنوان"}
        renderDropdownIcon={() => (
          <Entypo
            name="chevron-down"
            size={26}
            color={colorMode === "light" ? "black" : "white"}
          />
        )}
        dropdownIconPosition="left"
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 46,
    borderRadius: 20,
    width: "100%",
    marginVertical: 10,
    elevation: 5,
  },
  buttonText: {
    fontFamily: "Peyda",
    direction: "rtl",
    textAlign: "right",
  },
  dropDown: {
    borderRadius: 15,
  },

  lightBg: {
    backgroundColor: "#fff",
  },
  darkBg: {
    backgroundColor: "#414040",
  },
  lightText: {
    color: "#fff",
  },
  darkText: {
    color: "#333",
  },
});
