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

export default function ProductListScreen({ navigation, route }) {
  const productClick = (name, series, image, percent, data) => {
    navigation.navigate("detailScreen", {
      name: name || "بدون نام",
      series: series || "بدون سری",
      image: image || require("../assets/img/car1.png"),
      percent: percent || 0,
      data: data || [],
    });
  };
  const seriesClick = () => {
    navigation.push("productListScreen", { isProduct: true });
  };

  console.log(route);

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
                productClick(
                  item.item.name,
                  item.item.series,
                  item.item.img,
                  item.item.percent,
                  item.item.data
                );
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
