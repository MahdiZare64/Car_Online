import React from "react";
import { FlatList } from "react-native";
import { View } from "native-base";

import Wrapper from "../components/Wrapper";
import TopCircle from "../components/TopCircle";
import CustomInput from "../components/CustomInput";
import FilterButton from "../components/FilterButton";
import CarCard from "../components/CarCard";
import FloatingButton from "../components/FloatingButton";

import carsList from "../Dummy/carsList";
import categoryList from "../Dummy/categoryList";
import productCategoryList from "../Dummy/productCategoryList";

export default function carSelect({ navigation, route }) {
  const productClick = (name, image) => {
    navigation.navigate("expertForm", {
      name: name || "بدون نام",
      image: image || require("../assets/img/car1.png"),
      carSelected: true,
    });
  };
  const seriesClick = () => {
    navigation.push("carSelect", { isProduct: true });
  };

  return (
    <Wrapper navigation={navigation} title="car online" isBgColored>
      <TopCircle />

      <FlatList
        data={
          route?.params?.isProduct
            ? carsList
            : route?.params?.isShop
            ? productCategoryList
            : categoryList
        }
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
            isProduct={route?.params?.isProduct}
            img={item.item.img}
            title={item.item.name}
            isSecond={item.index % 2 == 0}
            onPress={() => {
              if (route?.params?.isProduct) {
                productClick(item.item.name, item.item.img);
              } else {
                seriesClick();
              }
            }}
          />
        )}
      />

      {route?.params?.isProduct ? <FloatingButton /> : <></>}
    </Wrapper>
  );
}
