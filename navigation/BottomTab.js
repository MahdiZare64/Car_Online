import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import {
  Ionicons,
  SimpleLineIcons,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { ServiceIcone, GarageIcon, SupportIcon } from "../assets/icons";

import ChangeThemeButton from "../components/ChangeThemeButton";
import HeaderRight from "../components/HeaderRight";

import { useColorMode } from "native-base";
import Colors from "../assets/Colors";

import HomeScreen from "../Screens/HomeScreen";
import ServicesScreen from "../Screens/ServicesScreen";
import GarageScreen from "../Screens/GarageScreen";
import InquiryScreen from "../Screens/InquiryScreen";
import SupportScreen from "../Screens/SupportScreen";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  const { colorMode } = useColorMode();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarStyle: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            marginTop: -40,
            height: 75,
            paddingTop: 10,
            elevation: 10,
            backgroundColor: colorMode === "light" ? Colors.light : Colors.gray,
            borderTopWidth: 0,
          },
          tabBarLabelPosition: "below-icon",
          tabBarIconStyle: { flex: 2 },
          tabBarLabelStyle: {
            flex: 1,
            marginTop: -10,
            fontFamily: "BnazaninBold",
            color: colorMode === "light" ? Colors.dark : Colors.light,
            fontSize: 13,
          },

          headerTransparent: true,
          headerRight: () => <HeaderRight />,
          headerLeft: () => <ChangeThemeButton />,
        }}
      >
        <Tab.Screen
          name="Services"
          component={ServicesScreen}
          options={{
            title: "",
            tabBarLabel: "خدمات",
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="hand-holding-water"
                size={focused ? 38 : 24}
                color={colorMode === "light" ? Colors.dark : Colors.light}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Garage"
          component={GarageScreen}
          options={{
            title: "",
            tabBarLabel: "گاراژ",
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="tools"
                size={focused ? 38 : 24}
                color={colorMode === "light" ? Colors.dark : Colors.light}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "",
            tabBarLabel: "خانه",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="ios-home-outline"
                size={focused ? 38 : 24}
                color={colorMode === "light" ? Colors.dark : Colors.light}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Inquiry"
          component={InquiryScreen}
          options={{
            title: "",
            tabBarLabel: "استعلام",
            tabBarIcon: ({ focused }) => (
              <SimpleLineIcons
                name="envelope-letter"
                size={focused ? 38 : 24}
                color={colorMode === "light" ? Colors.dark : Colors.light}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Support"
          component={SupportScreen}
          options={{
            title: "",
            tabBarLabel: "پشتیبانی",
            tabBarIcon: ({ focused }) => (
              <MaterialIcons
                name="support-agent"
                size={focused ? 38 : 24}
                color={colorMode === "light" ? Colors.dark : Colors.light}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
