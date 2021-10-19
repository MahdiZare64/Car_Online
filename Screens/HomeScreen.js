import React from "react";
import { Image, StyleSheet } from "react-native";
import { View } from "native-base";

import Wrapper from "../components/Wrapper";
import TwinColorButton from "../components/TwinColorButton";
import { CurveLine, StraightLine } from "../assets/icons";

export default function test() {
  return (
    <Wrapper>
      <View flexDirection="row-reverse" alignItems="center">
        <View>
          <Image
            source={require("../assets/img/car.png")}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View left={-130} zIndex={-1}>
          {/* top button */}
          <View>
            <TwinColorButton label="کارشناسی خودرو" />
            <View right={-50} top={-5}>
              <CurveLine />
            </View>
          </View>
          {/* top button */}

          {/* middle button */}
          <View height="85px">
            <TwinColorButton label="محاسبه قیمت" isRight />
            <View right={-100} top={-35} zIndex={-1}>
              <StraightLine />
            </View>
          </View>

          <View height="85px">
            <TwinColorButton label="نمایشگاه" isRight />
            <View right={-100} top={-35} zIndex={-1}>
              <StraightLine />
            </View>
          </View>
          {/* middle button */}

          {/* bottom button */}
          <View>
            <View right={-50} bottom={-20}>
              <CurveLine down />
            </View>
            <TwinColorButton label="فروشگاه" />
          </View>
          {/* bottom button */}
        </View>
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  image: {
    alignSelf: "flex-end",
    height: "100%",
  },
});
