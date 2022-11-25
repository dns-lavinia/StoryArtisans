import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons';
import { StyleSheet } from "react-native";

import { theme } from "../core/theme";

// Local navigator imports
import HomeStackNavigator from "./HomeStackNavigator";
import SearchStackNavigator from "./SearchStackNavigator";
import ComposeStackNavigator from "./ComposeStackNavigator";
import ReadStackNavigator from "./ReadStackNavigator";  
import ProfileStackNavigator from "./ProfileStackNavigator";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: theme.colors.primary,
        }}
        tabBarIcon={{
          focused: true,
          color: theme.colors.dark
        }}
    >

        {/* Configuration for the Home tab */}
        <Tab.Screen 
            name="Home" 
            component={HomeStackNavigator} 
            options={{
              headerStyle: styles.headerStyle,
              headerTintColor: theme.colors.text,
              tabBarLabel: "Home",
              tabBarShowLabel: false,
              tabBarIcon: ({ color }) => {
                return <Feather name="home" color={color} size={26} />
              }
            }}
        />

        {/* Configruation for the Search tab */}
        <Tab.Screen 
            name="Search" 
            component={SearchStackNavigator}
            options={{
              headerStyle: styles.headerStyle,
              headerTintColor: theme.colors.text,
              tabBarLabel: "Search",
              tabBarShowLabel: false,
              tabBarIcon: ({ color }) => {
                return <Feather name="search" color={color} size={26} />
              }
            }} 
        />

        {/* Configuration for the Compose tab */}
        <Tab.Screen 
            name="Compose" 
            component={ComposeStackNavigator}
            options={{
              headerStyle: styles.headerStyle,
              headerTintColor: theme.colors.text,
              tabBarLabel: "Compose",
              tabBarShowLabel: false,
              tabBarIcon: ({ color }) => {
                return <Feather name="edit-2" color={color} size={26} />
              }
            }} 
        />

        {/* Configuration for the Read tab */}
        <Tab.Screen 
            name="Read" 
            component={ReadStackNavigator}
            options={{
              headerStyle: styles.headerStyle,
              headerTintColor: theme.colors.text,
              tabBarLabel: "Read",
              tabBarShowLabel: false,
              tabBarIcon: ({ color }) => {
                return <Feather name="book-open" color={color} size={26} />
              }
            }} 
        />

        {/* Configuration for the Profile tab */}
        <Tab.Screen 
            name="Profile" 
            component={ProfileStackNavigator}
            options={{
              headerStyle: styles.headerStyle,
              headerTintColor: theme.colors.text,
              tabBarLabel: "Profile",
              tabBarShowLabel: false,
              tabBarIcon: ({ color }) => {
                return <Feather name="user" color={color} size={26} />
              }
            }} 
        />
    </Tab.Navigator>
  );
};


const styles = StyleSheet.create({
  headerStyle: {
      backgroundColor: theme.colors.secondary,
      borderBottomWidth: 0.2,
      borderColor: theme.colors.borderColor,
  },
})