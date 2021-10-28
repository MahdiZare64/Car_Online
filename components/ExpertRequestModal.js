import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { Text, View, Image } from "native-base";

import ExpertModalList from "./ExpertModalList";

export default function ExpertRequestModal({ visible }) {
  const [shown, isShown] = useState(!visible);
  useEffect(() => isShown(!shown), [visible]);

  const { height } = useWindowDimensions();
  return (
    <Modal visible={shown} transparent animationType="slide">
      <ScrollView>
        <TouchableWithoutFeedback onPress={() => isShown(false)}>
          <View height={height * 0.25} />
        </TouchableWithoutFeedback>

        <View
          style={styles.body}
          _dark={{ bg: "colors.gray" }}
          _light={{ bg: "colors.lightBg" }}
          minHeight={height * 0.75}
        >
          <View
            style={styles.topLine}
            bg="colors.primary"
            onPress={() => isShown(false)}
          />
          <View
            flex={1}
            _dark={{ bg: "colors.gray" }}
            _light={{ bg: "colors.lightBg" }}
            onStartShouldSetResponder={() => true}
          >
            <Text
              style={styles.headerTxt}
              fontSize="sm"
              _dark={{ color: "colors.lightGray" }}
              _light={{ color: "colors.gray" }}
            >
              ارز یابی و بررسی دقیق خودرو
            </Text>

            {/* main part */}
            <View style={styles.main}>
              <View style={styles.leftBody}>
                <Image
                  width="100%"
                  resizeMode="contain"
                  marginTop="15px"
                  source={require("../assets/img/weirdImg.png")}
                  alt="weird"
                />
                <View
                  style={styles.description}
                  _dark={{ bg: "colors.lightGray" }}
                  _light={{ bg: "colors.light" }}
                >
                  <Text
                    fontFamily="PeydaBold"
                    fontSize="sm"
                    _dark={{ color: "colors.light" }}
                    _light={{ color: "colors.dark" }}
                  >
                    توضیحات:
                  </Text>
                  <Text
                    fontFamily="Peyda"
                    fontSize="sm"
                    _dark={{ color: "colors.light" }}
                    _light={{ color: "colors.dark" }}
                  >
                    طبق نظر کارشناس کارکرد خودرو نسبت به سلامت ظاهری در بهترین
                    شکل ممکن میباشد
                  </Text>
                </View>
              </View>
              <View style={styles.rightBody}>
                <ExpertModalList/>
              </View>
            </View>
            {/* main part */}
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  body: {
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 15,
  },
  topLine: {
    width: 50,
    height: 5,
    borderRadius: 3,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 5,
  },
  headerTxt: {
    fontFamily: "Peyda",
    textAlign: "center",
    width: "100%",
  },
  main: {
    flexDirection: "row",
  },
  leftBody: {
    width: "55%",
  },
  rightBody: {
    width: "45%",
  },
  description: {
    elevation: 10,
    borderRadius: 25,
    marginTop: 25,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 18,
  },
});
