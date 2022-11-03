import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons';

import { theme } from "../core/theme";

// Local navigator imports
import HomeStackNavigator from "./HomeStackNavigator";
import SearchStackNavigator from "./SearchStackNavigator";
  
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
            component={SearchStackNavigator}
            options={{
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
            component={SearchStackNavigator}
            options={{
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
            component={SearchStackNavigator}
            options={{
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