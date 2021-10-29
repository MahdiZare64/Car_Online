import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ExpertForm from "../Screens/ExpertFormScreen";

const Stack = createStackNavigator();

export default function GarageNavigator() {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ExpertForm" component={ExpertForm} />
      </Stack.Navigator>
  );
}
