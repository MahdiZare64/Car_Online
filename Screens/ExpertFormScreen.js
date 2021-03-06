import React, { useState, useEffect } from "react";
import { StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import { Text, View } from "native-base";

import Wrapper from "../components/Wrapper";
import TopCircle from "../components/TopCircle";
import { ExpertIcon } from "../assets/icons";
import LevelCounter from "../components/LevelCounter";
import FormSelect from "../components/FormSelect";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import FormCarSelect from "../components/FormCarSelect";
import FormContactButton from "../components/FormContactButton";

import http from "../utils/http";
const api = http();

const time = ["14 الی 15", "17 الی 19", "20 الی 21", "8 الی 10", "10 الی 11"];

import prividences from "../Dummy/prividences";

export default function ExpertFormScreen({ navigation, route }) {
  const { height } = useWindowDimensions();
  const [level, setLevel] = useState(1);
  const [cities, setCities] = useState(prividences);

  useEffect(() => {
    const callBack = (data) => {
      console.log("done", data);
    };
    api.GetAllProvinces(callBack);
  }, []);
  return (
    <Wrapper>
      <TopCircle top={-0.8} />
      <ScrollView>
        <View style={styles.iconWrapper}>
          <ExpertIcon size={90} />
          <Text style={styles.mainTitle} fontSize="lg">
            کارشناسی خودرو
          </Text>
        </View>
        <View marginTop={height * 0.06} />
        <LevelCounter level={level} />

        <View
          style={styles.container}
          shadow="5"
          _dark={{ bg: "colors.dark" }}
          _light={{ bg: "colors.light" }}
        >
          {level === 2 ? (
            <Text
              fontFamily="Peyda"
              textAlign="center"
              fontSize="md"
              _dark={{ color: "colors.lightGray" }}
              _light={{ color: "colors.gray" }}
            >
              تعیین زمان و مکان
            </Text>
          ) : (
            <Text
              fontFamily="PeydaLight"
              _dark={{ color: "colors.lightGray" }}
              _light={{ color: "colors.gray" }}
            >
              پر کردن تمامی فیلد ها الزامی میباشد
            </Text>
          )}

          <FormCarSelect
            label="انتخاب خودرو:"
            navigation={navigation}
            carSelected={route?.params?.carSelected}
            image={route?.params?.image}
            name={route?.params?.name}
            price={"450,000"}
          />
          {level === 2 ? (
            <>
              <FormSelect placeholder="آدرس موردنظر:" data={["کرج", "تهران"]} />
              <FormSelect placeholder="انتخاب زمان کارشناسی:" data={time} />
            </>
          ) : (
            <>
              <FormSelect
                placeholder="انتخاب شهر:"
                data={cities}
                buttonTextAfterSelection={(selectedItem) => {
                  return selectedItem.name;
                }}
                rowTextForSelection={(item) => {
                  return item.name;
                }}
              />
              <FormInput label="نام و نام خانوادگی :" />
              <FormInput label="شماره تلفن :" />
            </>
          )}
        </View>

        <View style={styles.center}>
          {level === 2 ? (
            <View flexDirection="row" justifyContent="center">
              <FormButton
                onPress={() => console.log("saved!")}
                label="ثبت کارشناسی خودرو"
              />
              <View width="15px" />
              <FormButton onPress={() => setLevel(1)} label="بازگشت" isReturn />
            </View>
          ) : (
            <FormButton onPress={() => setLevel(2)} label="مرحله بعد" />
          )}
        </View>
        <FormContactButton
          style={{ marginBottom: 20 }}
          link="tel:+989124679926"
        />
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
