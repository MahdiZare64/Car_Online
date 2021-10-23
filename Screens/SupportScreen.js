import React from "react";
import { Center, Text } from "native-base";
import Wrapper from "../components/Wrapper";

export default function empty({navigation}) {
  return (
    <Wrapper navigation={navigation}>
      <Center w="100%" h="100%">
        <Text
          fontFamily="PeydaBold"
          fontSize="xl"
          _dark={{ color: "colors.light" }}
          _light={{ color: "colors.dark" }}
        >
          پشتیبانی
        </Text>
      </Center>
    </Wrapper>
  );
}
