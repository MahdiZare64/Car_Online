import React, { useState } from "react";
import { StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import { Text, View } from "native-base";

import Wrapper from "../components/Wrapper";
import TopCircle from "../components/TopCircle";
import { AntDesign } from "@expo/vector-icons";
import LevelCounter from "../components/LevelCounter";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";

import http from "../utils/http";
const api = http();

export default function ExpertFormScreen({ navigation, route }) {
  const { height } = useWindowDimensions();
  const [level, setLevel] = useState(1);
  const [input, setInput] = useState({ code: "", phone: "" });
  const loginHandler = () => {
    const callBack = ({ data }) => {
      setInput(data.data);
      setLevel(2);
    };
    api.Login(callBack, input);
  };

  return (
    <Wrapper>
      <TopCircle top={-0.8} />
      <View style={styles.iconWrapper}>
        <AntDesign name="login" size={80} color="white" />
        <Text style={styles.mainTitle} fontSize="lg">
          ورود به کار آنلاین
        </Text>
      </View>
      <ScrollView>
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
              fontFamily="PeydaLight"
              _dark={{ color: "colors.lightGray" }}
              _light={{ color: "colors.gray" }}
            >
              کد ارسال شده را وارد کنید
            </Text>
          ) : (
            <Text
              fontFamily="PeydaLight"
              _dark={{ color: "colors.lightGray" }}
              _light={{ color: "colors.gray" }}
              textAlign="right"
            >
              شماره تماس خود را وارد کنید
            </Text>
          )}
          {level === 2 ? (
            <>
              <FormInput
                label="کد ورود :"
                placeholder="مثال ۱۲۳۴۵"
                onChangeText={(val) => setInput({ ...input, code: val })}
              />
            </>
          ) : (
            <>
              <FormInput
                label="شماره تماس :"
                placeholder="مثال ۰۹۱۲۳۱۷۹۳۱۰"
                onChangeText={(val) => setInput({ ...input, phone: val })}
              />
            </>
          )}
          <View style={styles.center}>
            {level === 2 ? (
              <View flexDirection="row" justifyContent="center">
                <FormButton
                  onPress={() => console.log("saved!")}
                  label="ثبت کارشناسی خودرو"
                />
                <View width="15px" />
                <FormButton
                  onPress={() => setLevel(1)}
                  label="بازگشت"
                  isReturn
                />
              </View>
            ) : (
              <FormButton onPress={loginHandler} label="مرحله بعد" />
            )}
          </View>
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
    minHeight: 200,
    justifyContent: "space-between",
  },
  center: {
    alignItems: "center",
    marginBottom: 5,
  },
});
