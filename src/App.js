import React from 'react';
import { Provider } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { theme } from './core/theme';

// Screen imports
import {
  LoginScreen, StartScreen, RegisterScreen, SearchResultScreen, WriteScreen
} from './screens';

import BottomTabNavigator from './navigation/BottomTabNavigator';

// context import 
import { AuthProvider } from './context/auth';

// Create a stack that will keep the screens
const RootStack = createStackNavigator();

// for Login and Register screens
export default function App() {
    return (
        <Provider theme={theme}>
          <NavigationContainer>
                <AuthProvider>
                    <RootStack.Navigator
                        initialRouteName="StartScreen"
                        screenOptions={{
                            headerShown: false,
                        }}
                    >   
                        <RootStack.Screen name="StartScreen" component={StartScreen} />
                        <RootStack.Screen name="LoginScreen" component={LoginScreen} />
                        <RootStack.Screen name="RegisterScreen" component={RegisterScreen} />
                        <RootStack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
                        <RootStack.Screen name="SearchResultScreen" component={SearchResultScreen} />
                        <RootStack.Screen name="WriteScreen" component={WriteScreen} />
                    </RootStack.Navigator>
                </AuthProvider>
            </NavigationContainer>
        </Provider>
    );
}