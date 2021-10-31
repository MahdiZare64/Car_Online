import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./DrawerNavigation";
import Toast from "react-native-toast-message";
import { ToastConfig } from "../utils/ToastConfig";

const Stack = createStackNavigator();

export default function GarageNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
      <Toast
        config={ToastConfig}
        ref={(ref) => Toast.setRef(ref)}
        position="bottom"
        visibilityTime={3500}
      />
    </NavigationContainer>
  );
}
