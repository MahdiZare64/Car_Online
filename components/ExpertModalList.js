import React from "react";
import { StyleSheet, FlatList } from "react-native";
import ToggleSwitch from "toggle-switch-react-native";
import { Text, View } from "native-base";

import Colors from "../assets/Colors";
import data from "../Dummy/ExpertData";

const Title = ({ label }) => (
  <View style={styles.title}>
    <Text
      fontFamily="PeydaBold"
      fontSize="sm"
      _dark={{ color: "colors.light" }}
      _light={{ color: "colors.dark" }}
    >
      {label || "بدون عنوان"}
    </Text>
  </View>
);

const Item = ({ label, status }) => (
  <View style={styles.item}>
    <Text
      fontFamily="Peyda"
      fontSize="sm"
      _dark={{ color: "colors.light" }}
      _light={{ color: "colors.dark" }}
    >
      {label || "بدون نام"}
    </Text>

    <ToggleSwitch
      isOn={status}
      onColor={Colors.primary}
      thumbOnStyle={styles.thumbOnStyle}
      offColor={Colors.lightGray}
      label=""
      size="small"
      disabled
    />
  </View>
);

export default function ExpertModalList() {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={(item) => {
          if (item.item.isTitle) {
            return <Title label={item.item.label} />;
          } else {
            return <Item label={item.item.label} status={item.item.status} />;
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginRight: 8,
    marginBottom: 8,
  },
  item: {
    marginLeft: 15,
    marginBottom: 10,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  thumbOnStyle: {
    backgroundColor: Colors.light,
  },
});
