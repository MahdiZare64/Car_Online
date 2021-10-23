import React from "react";
import { FlatList, useWindowDimensions } from "react-native";
import { Text, View, Image, Progress, Button } from "native-base";

import Wrapper from "../components/Wrapper";
import TopCircle from "../components/TopCircle";
import DetailCarBox from "../components/DetailCarBox";

export default function DetailsScreen({ route }) {
  const { height, width } = useWindowDimensions();

  const params = route.params;

  return (
    <Wrapper>
      <TopCircle />
      <View flex={1}>
        <FlatList
          //top of screen
          ListHeaderComponent={() => (
            <View width="100%" height={height * 0.4}>
              <Text
                textAlign="center"
                fontFamily="Peyda"
                fontSize="md"
                marginX="20px"
                _light={{ color: "colors.light" }}
                _dark={{ color: "colors.dark" }}
              >
                {params.series}
              </Text>
              <Text
                textAlign="center"
                fontFamily="PeydaBold"
                fontSize="2xl"
                marginX="20px"
                marginTop="20px"
                _light={{ color: "colors.light" }}
                _dark={{ color: "colors.dark" }}
              >
                {params.name}
              </Text>
              <Image
                source={params.image}
                width="100%"
                height="70%"
                resizeMode="contain"
                right="-20%"
              />
            </View>
          )}
          //items
          data={params.data}
          renderItem={(item) => (
            <DetailCarBox label={item.item.label} value={item.item.value} />
          )}
          key={(item, index) => index}
          numColumns="3"
          columnWrapperStyle={{ justifyContent: "space-around" }}
          //bottom
          ListFooterComponent={() => (
            <View>
              <Text
                _dark={{ color: "colors.lightGray" }}
                _light={{ color: "colors.dark" }}
                textAlign="center"
                fontFamily="Peyda"
                fontSize="md"
                marginX="15px"
                marginBottom="15px"
              >
                ارزش خرید نسبت به همه فاکتور های لازم با توجه به قیمت
              </Text>

              <View>
                <View zIndex="1">
                  <Progress
                    value={params.percent}
                    marginX="20px"
                    size="xl"
                    flexDirection="row-reverse"
                    _filledTrack={{
                      borderRadius: 50,
                      bg: "colors.primary",
                    }}
                    bg="colors.dark"
                    shadow="5"
                    marginBottom="25px"
                  />
                </View>
                <Text
                  color="colors.light"
                  textAlign="center"
                  fontFamily="Peyda"
                  fontSize="md"
                  position="absolute"
                  width="100%"
                  zIndex="2"
                  top="-2px"
                >
                  {params.percent}%
                </Text>
              </View>

              <View
                flexDirection="row"
                justifyContent="center"
                marginBottom="20px"
                marginTop="30px"
              >
                <Button
                  onPress={() => console.log("hmmm")}
                  size="lg"
                  width={width * 0.3}
                  height={width * 0.15}
                  borderRadius="15"
                  shadow="4"
                  bg="colors.primary"
                  colorScheme="red"
                  _text={{
                    fontFamily: "PeydaBold",
                    fontSize: "md",
                  }}
                >
                  کارشناسی
                </Button>

                <Text
                  _dark={{
                    color: "colors.light",
                  }}
                  _light={{
                    color: "colors.dark",
                  }}
                  textAlign="right"
                  fontFamily="Peyda"
                  fontSize="md"
                  width={width * 0.6}
                >
                  بررسی دقیق توسط تیم کارشناسی با تاییدیه کتبی.
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </Wrapper>
  );
}
