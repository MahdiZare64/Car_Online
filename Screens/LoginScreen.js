import React, { useState } from "react";
import { StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import { Text, View } from "native-base";

import Wrapper from "../components/Wrapper";
import TopCircle from "../components/TopCircle";
import { AntDesign } from "@expo/vector-icons";
import LevelCounter from "../components/LevelCounter";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import LoadingComponent from "../components/LoadingComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";

import http from "../utils/http";
const api = http();

export default function ExpertFormScreen({ navigation, route }) {
  const { height } = useWindowDimensions();
  const [level, setLevel] = useState(1);
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const loginHandler = () => {
    const callBack = ({ data }) => {
      if (data.isSuccess) {
        setLevel(2);
      } else {
        setLevel(1);
      }
      setIsLoading(false);
    };

    setIsLoading(true);
    api.Login(phone, callBack);
  };

  const verifyHandler = () => {
    const callBack = ({ data }) => {
      console.log(data);
      if (data.isSuccess) {
        AsyncStorage.setItem("token", data.data);
        navigation.navigate("Home", { screen: "HomePage" });
      } else {
        setIsLoading(false);
      }
    };

    setIsLoading(true);
    const data = {
      phone: phone,
      code: code,
    };
    api.LoginVerify(data, callBack);
  };

  const phoneHandler = (val) => {
    // const re = /[0-9]/g;
    // if (re.test(val)) {
    setPhone(val);
    // }
  };

  const codeHandler = (val) => {
    const re = /[0-9]/g;
    if (re.test(val)) {
      setCode(val);
    }
  };

  return (
    <Wrapper>
      <TopCircle top={-0.8} />
      <ScrollView>
        <View style={styles.iconWrapper}>
          <AntDesign name="login" size={80} color="white" />
          <Text style={styles.mainTitle} fontSize="lg">
            ???????? ???? ?????? ????????????
          </Text>
        </View>
        <View marginTop={height * 0.06} />
        <LevelCounter level={level} />

        <LoadingComponent isLoading={isLoading}>
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
                ???? ?????????? ?????? ???? ???????? ????????
              </Text>
            ) : (
              <Text
                fontFamily="PeydaLight"
                _dark={{ color: "colors.lightGray" }}
                _light={{ color: "colors.gray" }}
                textAlign="right"
              >
                ?????????? ???????? ?????? ???? ???????? ????????
              </Text>
            )}
            {level === 2 ? (
              <>
                <FormInput
                  label="???? ???????? :"
                  placeholder="???????? ??????????"
                  onChangeText={codeHandler}
                  value={code}
                  keyboardType="numeric"
                />
              </>
            ) : (
              <>
                <FormInput
                  label="?????????? ???????? :"
                  placeholder="???????? ??????????????????????"
                  onChangeText={phoneHandler}
                  value={phone}
                  maxLength={11}
                  keyboardType="numeric"
                />
              </>
            )}
            <View style={styles.center}>
              {level === 2 ? (
                <View flexDirection="row" justifyContent="center">
                  <FormButton onPress={verifyHandler} label="?????????? ?????? ??????" />
                  <View width="15px" />
                  <FormButton
                    onPress={() => setLevel(1)}
                    label="????????????"
                    isReturn
                  />
                </View>
              ) : (
                <FormButton onPress={loginHandler} label="?????????? ??????" />
              )}
            </View>
          </View>
        </LoadingComponent>
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
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    minHeight: 200,
    justifyContent: "space-between",
  },
  center: {
    alignItems: "center",
    marginBottom: 5,
  },
});
