import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Feather } from '@expo/vector-icons';
import { StyleSheet } from "react-native";
import axios from "axios";

import { theme } from "../core/theme";

// Local navigator imports
import ComposeStackNavigator from "./ComposeStackNavigator";
import ProfileStackNavigator from "./ProfileStackNavigator";
import SearchStackNavigator from "./SearchStackNavigator";
import HomeStackNavigator from "./HomeStackNavigator";
import ReadStackNavigator from "./ReadStackNavigator";  

// Local atoms import
import IconButton from '../components/atoms/IconButton';

// local context import 
import { AuthContext } from "../context/auth";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator({ navigation }) {
    const [state, setState] = useContext(AuthContext);

    const onLogOutPressed = async () => {
        let response;

        setState({ token: "", user: null });
        await AsyncStorage.removeItem("auth-rn");
        navigation.navigate("StartScreen");
        // navigation.reset({
        //   index: 0,
        //   routes: [{ name: "StartScreen" }],
        // });
        
        // When using an android emulator with expo-go 
        // use 10.0.2.2 instead of localhost
        // const resp = await axios
        //     .post("http://10.0.2.2:8080/api/auth/signout")
        //     .then((res) => {
        //         response = res.data.message;
        //     })
        //     .catch((err) => {
        //         response = err;
        //     });

        // if (response == "You've been signed out!") {
        //     navigation.reset({
        //       index: 0,
        //       routes: [{ name: "StartScreen" }],
        //     });
        // }
    };

    return (
      <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarActiveTintColor: theme.colors.primary,
            headerRight: () => (
                <IconButton
                      icon="logout"
                      iconColor={theme.colors.firstColors}
                      onPress={onLogOutPressed}
                />
            ),
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