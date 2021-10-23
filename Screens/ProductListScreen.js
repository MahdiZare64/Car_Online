import React from "react";
import { FlatList } from "react-native";
import { View } from "native-base";

import Wrapper from "../components/Wrapper";
import TopCircle from "../components/TopCircle";
import CustomInput from "../components/CustomInput";
import FilterButton from "../components/FilterButton";
import CarCard from "../components/CarCard";

import data from "../Dummy/DummyData"

export default function ProductListScreen({ navigation }) {
  const cardClick = (name, series, image, percent, data) => {
    navigation.navigate("detailScreen", {
      name: name || "بدون نام",
      series: series || "بدون سری",
      image: image || require("../assets/img/car1.png"),
      percent: percent || 0,
      data: data || [],
    });
  };

  return (
    <Wrapper navigation={navigation} title="car online" isBgColored>
      <TopCircle />

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
            onPress={() =>
              cardClick(
                item.item.name,
                item.item.series,
                item.item.img,
                item.item.percent,
                item.item.data
              )
            }
          />
        )}
      />
    </Wrapper>
  );
}
