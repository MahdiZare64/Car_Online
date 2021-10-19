import React from "react";
import { Center, Text } from "native-base";
import Wrapper from "../components/Wrapper";

export default function empty() {
  return (
    <Wrapper>
      <Center w="100%" h="100%">
        <Text
          fontFamily="BnazaninBold"
          fontSize="xl"
          _dark={{ color: "colors.light" }}
          _light={{ color: "colors.dark" }}
        >
          گاراژ
        </Text>
      </Center>
    </Wrapper>
  );
}
