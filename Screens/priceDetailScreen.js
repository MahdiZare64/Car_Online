import React from "react";
import { StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import { Text, View, Image } from "native-base";

import Wrapper from "../components/Wrapper";
import TopCircle from "../components/TopCircle";
import PriceCardsBox from "../components/PriceCardsBox";
import FormSelect from "../components/FormSelect";
import FormInput from "../components/FormInput";

const colorList = ["مشکی", "سفید", "سرمه ای", "زرشکی", "سایر رنگها"];
const insuranceList = [
  "یکماه",
  "دوماه",
  "سه ماه",
  "چهارماه",
  "شش ماه یا بیشتر",
];
const yearList = ["یک سال", "دو سال", "سه سال", "چهارسال", "ندارد"];

export default function DetailsScreen({ route }) {
  const { height } = useWindowDimensions();

  const params = route.params;

  return (
    <Wrapper>
      <TopCircle />
      <ScrollView>
        <View width="100%" height={height * 0.4}>
          <Text
            textAlign="center"
            fontFamily="Peyda"
            fontSize="md"
            marginX="20px"
            color="colors.light"
          >
            {params.series}
          </Text>
          <Text
            textAlign="center"
            fontFamily="PeydaBold"
            fontSize="2xl"
            marginX="20px"
            marginTop="20px"
            color="colors.light"
          >
            {params.name}
          </Text>
          <Image
            source={params.image}
            width="100%"
            height="70%"
            resizeMode="contain"
            right="-20%"
            alt="car image"
          />
        </View>

        <PriceCardsBox
          price="2,400,000,000"
          downPrice="2,328,000,000"
          topPrice="2,496,000,000"
        />

        <View
          style={styles.container}
          shadow="5"
          _dark={{ bg: "colors.dark" }}
          _light={{ bg: "colors.light" }}
        >
          <Text
            fontFamily="Peyda"
            textAlign="center"
            fontSize="md"
            _dark={{ color: "colors.lightGray" }}
            _light={{ color: "colors.gray" }}
          >
            ارزیابی دقیق تری داشته باشید
          </Text>

          <FormInput label="کیلومتر رفته :" />
          <FormSelect placeholder="انتخاب رنگ " data={colorList} />
          <FormSelect
            placeholder="چقدر از بیمه آن مانده؟"
            data={insuranceList}
          />
          <FormSelect placeholder="تخفیف بیمه چقدر است؟" data={yearList} />
        </View>
      </ScrollView>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  iconWrapper: {
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
  },
  mainTitle: {
    fontFamily: "PeydaBold",
    marginTop: 10,
    color: "#fff",
  },
  container: {
    width: "90%",
    alignSelf: "center",
    borderRadius: 25,
    marginTop: 20,
    padding: 10,
    marginBottom: 20,
  },
  center: {
    alignItems: "center",
    marginBottom: 5,
  },
});
