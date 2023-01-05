import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Movies from "../screen/Movies";
import My from "../screen/My";
import { useColorScheme } from "react-native";
import { DARK_COLOR, PURPLE_COLOR, YELLOW_COLOR } from "../common/colors";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark";

  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: isDark ? DARK_COLOR : "white",
      }}
      screenOptions={{
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: {
          backgroundColor: isDark ? DARK_COLOR : "white",
        },
        tabBarActiveTintColor: isDark ? YELLOW_COLOR : PURPLE_COLOR,
        tabBarInactiveTintColor: isDark ? "white" : DARK_COLOR,
        headerStyle: { backgroundColor: isDark ? DARK_COLOR : "white" },
        headerTintColor: isDark ? YELLOW_COLOR : PURPLE_COLOR,
      }}
    >
      <Tab.Screen
        options={{
          title: "Movies",
          headerTitleAlign: "center",
          tabBarLabel: "Movies",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="local-movies" size={size} color={color} />
          ),
        }}
        name="Movies"
        component={Movies}
      />
      <Tab.Screen
        options={{
          title: "My",
          headerTitleAlign: "center",
          tabBarLabel: "My",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-circle" size={size} color={color} />
          ),
        }}
        name="My"
        component={My}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
