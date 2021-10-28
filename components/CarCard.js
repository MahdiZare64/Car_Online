import React from "react";
import { StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Text, View, Image } from "native-base";

export default function CarCard({ isProduct, img, title, isSecond, onPress }) {

  return (
    <View
      width={Dimensions.get("window").width / 2 - 40}
      margin="20px"
      marginTop={isSecond ? "20px" : "50px"}
      height={Dimensions.get("window").width * 0.6}
      borderRadius="35"
      backgroundColor="colors.light"
      shadow="6"
      justifyContent="space-between"
    >
      <View marginY="5px">
        <Image source={img} resizeMode="contain" alt="car image" />
      </View>
      <View
        width="100%"
        height="50%"
        justifyContent="space-around"
        paddingBottom="30px"
      >
        <View>
          <Text
            color="colors.dark"
            fontFamily="Peyda"
            fontSize="sm"
            width="100%"
            textAlign="center"
            paddingX="10"
            noOfLines={1}
          >
            {title || "بدون عنوان"}
          </Text>
          <View
            borderBottomWidth="0.7"
            borderBottomColor="colors.lightGray"
            marginX="10px"
          />
        </View>
        <TouchableOpacity style={{ padding: 10 }} onPress={onPress}>
          <Text
            color="colors.lightGray"
            fontFamily="PeydaBold"
            textAlign="center"
          >
            {isProduct ? "انتخاب خودرو" : "انتخاب سری"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
