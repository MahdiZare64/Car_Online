import React, { useEffect } from "react";
import { StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Text, View, Image } from "native-base";

export default function CarCard({ img, title, isSecond }) {
  useEffect(() => {
    console.log(title, isSecond);
  });
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
        <Image source={img} resizeMode="contain" />
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
            {title || "test"}
          </Text>
          <View
            borderBottomWidth="0.7"
            borderBottomColor="colors.lightGray"
            marginX="10px"
          />
        </View>
        <TouchableOpacity
          style={{ padding: 10 }}
          onPress={() => console.log("pressed!")}
        >
          <Text
            color="colors.lightGray"
            fontFamily="PeydaBold"
            textAlign="center"
          >
            انتخاب خودرو
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
