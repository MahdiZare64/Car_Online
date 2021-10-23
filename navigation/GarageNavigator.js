import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProductListScreen from "../Screens/ProductListScreen";
import DetailsScreen from "../Screens/DetailsScreen";

const Stack = createStackNavigator();

export default function GarageNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="productListScreen" component={ProductListScreen} />
      <Stack.Screen name="detailScreen" component={DetailsScreen}/>
    </Stack.Navigator>
  );
}
