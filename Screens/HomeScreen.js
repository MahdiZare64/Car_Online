import React from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { View, Image } from "native-base";

import Wrapper from "../components/Wrapper";
import TwinColorButton from "../components/TwinColorButton";
import { CurveLine } from "../assets/icons";

export default function test() {
  const { height, width } = useWindowDimensions();
  return (
    <Wrapper>
      <View flexDirection="row-reverse" alignItems="center">
        <View height="100%" width="100%">
          <Image
            source={require("../assets/img/car.png")}
            style={styles.image}
            resizeMode="contain"
            height="100%"
            width="100%"
            marginRight="-50%"
          />
        </View>

        <View
          right="20%"
          top={height < 600 ? 0 : "auto"}
          position="absolute"
          zIndex={-1}
        >
          {/* top button */}
          <View>
            <TwinColorButton small={height < 600} label="کارشناسی خودرو" />
            <View right={-50} top={-5} flexDirection="row">
              <CurveLine small={height < 600} />
              <View
                width={width}
                height="1px"
                backgroundColor="colors.secondary"
                marginTop={height < 600 ? "70.5px" : "135px"}
                left={height < 600 ? "-8px" : "-13px"}
              />
            </View>
          </View>
          {/* top button */}

          {/* middle button */}
          <View height={height < 600 ? "50px" : "85px"}>
            <TwinColorButton
              small={height < 600}
              label="محاسبه قیمت"
              isRight
            />
            <View
              right={height < 600 ? -50 : -100}
              top={height < 600 ? -20 : -35}
              zIndex={-1}
            >
              <View
                width={width}
                height="1px"
                backgroundColor="colors.secondary"
              />
            </View>
          </View>
          {/* middle button */}

          {/* middle button */}
          <View height={height < 600 ? "50px" : "85px"}>
            <TwinColorButton small={height < 600} label="نمایشگاه" isRight />
            <View right={-100} top={-35} zIndex={-1}>
              <View
                width={width}
                height="1px"
                backgroundColor="colors.secondary"
              />
            </View>
          </View>
          {/* middle button */}

          {/* bottom button */}
          <View>
            <View right={-40} bottom={-20} flexDirection="row">
              <CurveLine down small={height < 600} />
              <View
                width={width}
                height="1px"
                backgroundColor="colors.secondary"
                marginTop={height < 600 ? "-2.5px" : "-4px"}
                left={height < 600 ? "-6px" : "-13px"}
              />
            </View>
            <TwinColorButton small={height < 600} label="فروشگاه" />
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
