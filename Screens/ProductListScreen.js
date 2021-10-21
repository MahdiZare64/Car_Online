import React from "react";
import { StyleSheet, Dimensions, FlatList } from "react-native";
import { View } from "native-base";

import Wrapper from "../components/Wrapper";
import CustomInput from "../components/CustomInput";
import FilterButton from "../components/FilterButton";
import CarCard from "../components/CarCard";

const data = [
  {
    img: require("../assets/img/car1.png"),

    name: "bmw series",
  },
  {
    img: require("../assets/img/car2.png"),

    name: "porshe",
  },
  {
    img: require("../assets/img/car3.png"),

    name: "benz series",
  },
  {
    img: require("../assets/img/car1.png"),

    name: "lexus series",
  },
  {
    img: require("../assets/img/car1.png"),

    name: "bmw series",
  },
  {
    img: require("../assets/img/car2.png"),

    name: "porshe",
  },
  {
    img: require("../assets/img/car3.png"),

    name: "benz series",
  },
  {
    img: require("../assets/img/car2.png"),

    name: "lexus series",
  },
  {
    img: require("../assets/img/car1.png"),

    name: "bmw series",
  },
  {
    img: require("../assets/img/car2.png"),

    name: "porshe",
  },
  {
    img: require("../assets/img/car3.png"),

    name: "benz series",
  },
  {
    img: require("../assets/img/car3.png"),

    name: "lexus series",
  },
];

export default function ProductListScreen({navigation}) {
  return (
    <Wrapper navigation={navigation}>
      <View
        style={styles.circle}
        _dark={{ backgroundColor: "colors.secondary" }}
        _light={{ backgroundColor: "colors.primary" }}
      ></View>

      <FlatList
        data={data}
        keyExtractor={(item, index) => index}
        numColumns="2"
        ListHeaderComponent={() => (
          <View paddingX="30px" paddingTop={5} alignItems="flex-end">
            <CustomInput />
            <FilterButton style={{ marginTop: 15 }} />
          </View>
        )}
        renderItem={(item) => (
          <CarCard
            img={item.item.img}
            title={item.item.name}
            isSecond={item.index % 2 == 0}
          />
        )}
      />
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: Dimensions.get("screen").width * 1.5,
    height: Dimensions.get("screen").width * 1.5,
    borderRadius: Dimensions.get("screen").width * 0.75,
    left: Dimensions.get("screen").width * -0.25,
    top: Dimensions.get("screen").width * -0.6,
    position: "absolute",
  },
});
