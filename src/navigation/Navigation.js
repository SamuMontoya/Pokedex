import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import FavoriteNav from "./FavoriteNav";
import AccountNav from "./AccountNav";
import PokedexNav from "./PokedexNav";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const aColor = "#5483BA";
  const iColor = "#112F51";

  return (
    <Tab.Navigator
      initialRouteName="Pokedex"
      tabBarOptions={{
        activeTintColor: aColor,
        inactiveTintColor: iColor,
      }}
    >
      <Tab.Screen
        name="Favorite"
        component={FavoriteNav}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedexNav}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokedexIcon(),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNav}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const renderPokedexIcon = () => (
  <Image
    source={require("../assets/pokedex-icon.png")}
    style={{ width: 70, height: 70, top: -10 }}
  />
);

export default Navigation;
