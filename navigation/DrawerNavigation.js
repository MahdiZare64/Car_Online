import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "./BottomTab";

import colors from "../assets/Colors";
import { useColorMode } from "native-base";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

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
      // drawerContent={(props) => (
      //   <DrawerContentScrollView {...props}>
      //     <DrawerItem
      //       label="خدمات"
      //       onPress={() =>
      //         console.log("hmmm", props.navigation.navigate("Services"))
      //       }
      //     />
      //     <DrawerItem
      //       label="گاراژ"
      //       onPress={() =>
      //         console.log("hmmm", props.navigation.navigate("Garage"))
      //       }
      //     />
      //     <DrawerItem
      //       label="خانه"
      //       onPress={() =>
      //         console.log("hmmm", props.navigation.navigate("Home"))
      //       }
      //     />
      //     <DrawerItem
      //       label="استعلام"
      //       onPress={() =>
      //         console.log("hmmm", props.navigation.navigate("Inquiry"))
      //       }
      //     />
      //     <DrawerItem
      //       label="پشتیبانی"
      //       onPress={() =>
      //         console.log("hmmm", props.navigation.navigate("Support"))
      //       }
      //     />
      //   </DrawerContentScrollView>
      // )}
    >
      <Drawer.Screen name="DrawerHome" component={HomeScreen} />
    </Drawer.Navigator>
  );
}
