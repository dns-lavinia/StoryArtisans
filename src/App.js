import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

// Screen imports
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';

// Create a stack that will keep the screens
const Stack = createStackNavigator();

// for Login and Register screens
const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      {/* for the login screen */}
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerDown: false}}
      />

      {/* for the registration screen */}
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">

        {/* Auth navigator */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerDown: false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}