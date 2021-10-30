import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../Screens/HomeScreen";

import ExpertFormScreen from "../Screens/ExpertFormScreen";
import ExpertCarSelectScreen from "../Screens/ExpertCarSelectScreen";
import PriceListscreen from "../Screens/PriceListscreen";
import priceDetailScreen from "../Screens/priceDetailScreen";

import Colors from "../assets/Colors";
import HeaderRight from "../components/HeaderRight";
import ChangeThemeButton from "../components/ChangeThemeButton";

import { useColorMode } from "native-base";

const Stack = createStackNavigator();

export default function GarageNavigator() {
  const { colorMode } = useColorMode();

  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerTransparent: true,
        headerRight: () => <HeaderRight navigation={navigation} />,
        headerLeft: () => <ChangeThemeButton />,
        headerTitleAlign: "center",
        headerTitleStyle: {
          color: colorMode === "light" ? Colors.dark : Colors.light,
          marginTop: 5,
          fontFamily: "PeydaBold",
        },
      })}
    >
      <Stack.Screen
        name="HomePage"
        component={HomeScreen}
        options={{ title: "Car Online" }}
      />
      <Stack.Screen
        name="expertForm"
        component={ExpertFormScreen}
        options={({ navigation }) => ({
          title: "Car Online",
          headerRight: () => (
            <HeaderRight isBgColored navigation={navigation} />
          ),
          headerLeft: () => <ChangeThemeButton isBgColored />,
          headerTitleStyle: {
            color: Colors.light,
            marginTop: 5,
            fontFamily: "PeydaBold",
          },
        })}
      />
      <Stack.Screen
        name="carSelect"
        component={ExpertCarSelectScreen}
        options={({ navigation }) => ({
          title: "انتخاب خودرو",
          headerRight: () => (
            <HeaderRight isBgColored navigation={navigation} />
          ),
          headerLeft: () => <ChangeThemeButton isBgColored />,
          headerTitleStyle: {
            color: Colors.light,
            marginTop: 5,
            fontFamily: "PeydaBold",
          },
        })}
      />

      <Stack.Screen
        name="priceListScreen"
        component={PriceListscreen}
        options={({ navigation }) => ({
          title: "محاسبه قیمت",
          headerRight: () => (
            <HeaderRight isBgColored navigation={navigation} />
          ),
          headerLeft: () => <ChangeThemeButton isBgColored />,
          headerTitleStyle: {
            color: Colors.light,
            marginTop: 5,
            fontFamily: "PeydaBold",
          },
        })}
      />
      <Stack.Screen
        name="priceDetailScreen"
        component={priceDetailScreen}
        options={({ navigation }) => ({
          title: "محاسبه قیمت",
          headerRight: () => (
            <HeaderRight isBgColored navigation={navigation} />
          ),
          headerLeft: () => <ChangeThemeButton isBgColored />,
          headerTitleStyle: {
            color: Colors.light,
            marginTop: 5,
            fontFamily: "PeydaBold",
          },
        })}
      />
    </Stack.Navigator>
  );
}
