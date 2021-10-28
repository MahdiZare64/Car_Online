import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// icons
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { ServiceIcone, GarageIcon, SupportIcon } from "../assets/icons";

// navigation components
import ChangeThemeButton from "../components/ChangeThemeButton";
import HeaderRight from "../components/HeaderRight";

// colors
import { useColorMode } from "native-base";
import Colors from "../assets/Colors";

// screens
import HomeScreen from "../Screens/HomeScreen";
import ServicesScreen from "../Screens/ServicesScreen";
import ProductListScreen from "./GarageNavigator";
import InquiryScreen from "../Screens/InquiryScreen";
import SupportScreen from "../Screens/SupportScreen";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  const { colorMode } = useColorMode();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ navigation }) => ({
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
          fontFamily: "Peyda",
          color: colorMode === "light" ? Colors.dark : Colors.light,
          fontSize: 13,
        },

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
      <Tab.Screen
        name="Services"
        component={ServicesScreen}
        options={{
          title: "",
          tabBarLabel: "خدمات",
          tabBarIcon: ({ focused }) => (
            <ServiceIcone size={focused ? 38 : 24} colorMode={colorMode} />
          ),
        }}
      />

      <Tab.Screen
        name="Garage"
        component={ProductListScreen}
        options={({ navigation }) => ({
          title: "نمایشگاه",
          tabBarLabel: "گاراژ",
          tabBarIcon: ({ focused }) => (
            <GarageIcon size={focused ? 38 : 24} colorMode={colorMode} />
          ),
          headerRight: () => (
            <HeaderRight isBgColored navigation={navigation} />
          ),
          headerLeft: () => <ChangeThemeButton isBgColored />,
          headerTitleStyle: {
            color: Colors.light,
          },
        })}
      />

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Car Online",
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
            <SupportIcon size={focused ? 38 : 24} colorMode={colorMode} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
