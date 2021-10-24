import React from "react";
import { StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import { View, Image } from "native-base";

import Wrapper from "../components/Wrapper";
import TwinColorButton from "../components/TwinColorButton";
import { CurveLine } from "../assets/icons";

export default function HomeScreen({ navigation }) {
  const { height, width } = useWindowDimensions();
  return (
    <Wrapper navigation={navigation} title="">
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
        <ScrollView
          right="20%"
          top={height < 750 ? 0 : "auto"}
          position="absolute"
          zIndex={-1}
          height="100%"
          justifyContent="center"
        >
          <View marginTop={height < 450 ? "30px" : "0"} />
          {/* top button */}
          <View>
            <TwinColorButton small={height < 750} label="کارشناسی خودرو" />
            <View right={-50} top={-5} flexDirection="row" zIndex="-1">
              <Image
                source={require("../assets/curve.png")}
                height={height < 750 ? "47px" : "150px"}
                width={height < 750 ? "60px" : "167px"}
                resizeMode="contain"
              />
              <View
                width={width}
                height="1px"
                backgroundColor="colors.primary"
                marginTop={height < 750 ? "45px" : "135px"}
                left={height < 750 ? "-8px" : "-13px"}
              />
            </View>
          </View>
          {/* top button */}

          {/* middle button */}
          <View height={height < 750 ? "50px" : "85px"}>
            <TwinColorButton small={height < 750} label="محاسبه قیمت" isRight />
            <View
              right={height < 750 ? -50 : -100}
              top={height < 750 ? -20 : -35}
              zIndex={-1}
            >
              <View
                width={width}
                height="2px"
                backgroundColor="colors.secondary"
              />
            </View>
          </View>
          {/* middle button */}

          {/* middle button */}
          <View height={height < 750 ? "50px" : "85px"}>
            <TwinColorButton
              onPress={() => navigation.navigate("Garage")}
              small={height < 750}
              label="نمایشگاه"
              isRight
            />
            <View
              right={height < 750 ? -50 : -100}
              top={height < 750 ? -20 : -35}
              zIndex={-1}
            >
              <View
                width={width}
                height="2px"
                backgroundColor="colors.secondary"
              />
            </View>
          </View>
          {/* middle button */}

          {/* bottom button */}
          <View>
            <View right={-40} bottom={-20} flexDirection="row">
              <Image
                source={require("../assets/curve.png")}
                height={height < 750 ? "47px" : "150px"}
                width={height < 750 ? "60px" : "167px"}
                resizeMode="contain"
                transform={[{ rotate: "90deg" }]}
              />
              <View
                width={width}
                height="1px"
                backgroundColor="colors.primary"
                marginTop={height < 750 ? "-3px" : "-4px"}
                left={height < 750 ? "-8px" : "-13px"}
              />
            </View>
            <TwinColorButton small={height < 750} label="فروشگاه" />
          </View>
          {/* bottom button */}
        </ScrollView>
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
