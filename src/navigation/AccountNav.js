import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/Account";

const Stack = createStackNavigator();

const AccountNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};

export default AccountNav;
