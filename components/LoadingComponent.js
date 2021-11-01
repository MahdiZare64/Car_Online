import React from "react";
import { Text, View, Spinner } from "native-base";

export default function LoadingComponent({ isLoading, ...props }) {
  return (
    <>
      {isLoading ? (
        <View marginY="30px">
          <Spinner size="lg" color="colors.primary" />
          <Text
            fontFamily="PeydaBold"
            fontSize="md"
            textAlign="center"
            _dark={{ color: "colors.light" }}
            _white={{ color: "colors.dark" }}
          >
            لطفا منتظر بمانید...
          </Text>
        </View>
      ) : (
        props.children
      )}
    </>
  );
}
