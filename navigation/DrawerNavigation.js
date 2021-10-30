import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "./BottomTab";

import colors from "../assets/Colors";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import DrawerNavigationItem from "../components/DrawerNavigationItem";

// icons
import { Ionicons, SimpleLineIcons, Feather } from "@expo/vector-icons";
import {
  ServiceIcone,
  GarageIcon,
  SupportIcon,
  ExpertIcon,
} from "../assets/icons";
// colors
import { useColorMode, View, Text } from "native-base";
import Colors from "../assets/Colors";

const Drawer = createDrawerNavigator();

export default function App() {
  const { colorMode } = useColorMode();
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",
        drawerStyle: {
          backgroundColor: colorMode === "light" ? colors.lightBg : colors.gray,
        },
      }}
      drawerContent={(props) => (
        <DrawerContentScrollView {...props}>
          <View
            borderBottomWidth="1px"
            marginTop="10px"
            marginX="15px"
            _dark={{ borderBottomColor: "colors.light" }}
            _light={{ borderBottomColor: "colors.dark" }}
          >
            <Text fontFamily="PeydaBold" fontSize="xl" textAlign="center">
              Car Online
            </Text>
          </View>

          <DrawerNavigationItem
            label="خانه"
            navigation={props.navigation}
            icon={
              <Ionicons
                name="ios-home-outline"
                size={25}
                color={colorMode === "light" ? Colors.dark : Colors.light}
              />
            }
            navigateRoute="Home"
          />
          <DrawerNavigationItem
            label="گاراژ"
            navigation={props.navigation}
            icon={<GarageIcon size={24} colorMode={colorMode} />}
            navigateRoute="Garage"
          />

          <DrawerNavigationItem
            label="کارشناسی خودرو"
            navigation={props.navigation}
            icon={<ExpertIcon size={24} colorMode={colorMode} />}
            navigateRoute="expertForm"
          />

          <DrawerNavigationItem
            label="محاسبه قیمت"
            navigation={props.navigation}
            icon={  <Ionicons
                name="calculator"
                size={25}
                color={colorMode === "light" ? Colors.dark : Colors.light}
              />}
            navigateRoute="priceListScreen"
          />

          <DrawerNavigationItem
            label="فروشگاه"
            navigation={props.navigation}
            icon={
              <Feather
                name="shopping-bag"
                size={24}
                color={colorMode === "light" ? Colors.dark : Colors.light}
              />
            }
            navigateRoute="HomeScreen"
            navigateParams={{
              screen: "DrawerHome",
              params: {
                screen: "Garage",
                params: {
                  screen: "productListScreen",
                  params: {
                    isShop: true,
                  },
                },
              },
            }}
          />

          <DrawerNavigationItem
            label="خدمات"
            navigation={props.navigation}
            icon={<ServiceIcone size={24} colorMode={colorMode} />}
            navigateRoute="Services"
          />

          <DrawerNavigationItem
            label="استعلام"
            navigation={props.navigation}
            icon={
              <SimpleLineIcons
                name="envelope-letter"
                size={24}
                color={colorMode === "light" ? Colors.dark : Colors.light}
              />
            }
            navigateRoute="Inquiry"
          />

          <DrawerNavigationItem
            label="پشتیبانی"
            navigation={props.navigation}
            icon={<SupportIcon size={24} colorMode={colorMode} />}
            navigateRoute="Support"
          />
        </DrawerContentScrollView>
      )}
    >
      <Drawer.Screen name="DrawerHome" component={HomeScreen} />
    </Drawer.Navigator>
  );
}
