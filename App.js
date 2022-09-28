import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import ReelsScreen from "./screens/ReelsScreen";
import Ionic from "react-native-vector-icons";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const homeName = "Home";
const reelsName = "Reels";
const searchName = "Search";

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "search" : "search-outline";
            } else if (route.name === "Reels") {
              iconName = focused ? "play-circle" : "play-circle-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "black",
          inaactiveTintColor: "black",
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70, backgroundColor: "black" },
          backgroundColor: "black",
        }}
      >
        <Tab.Screen
          name={homeName}
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={reelsName}
          component={ReelsScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={searchName}
          component={SearchScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
