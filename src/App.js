import React from 'react';
import { Provider } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { theme } from './core/theme';

// Screen imports
import {
  LoginScreen, StartScreen, RegisterScreen
} from './screens';

// Create a stack that will keep the screens
const Stack = createStackNavigator();

// for Login and Register screens
export default function App() {
    return (
        <Provider theme={theme}>
          <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="StartScreen"
                    screenOptions={{
                        headerShown: false,
                    }}
                >   
                    <Stack.Screen name="StartScreen" component={StartScreen} />
                    <Stack.Screen name="LoginScreen" component={LoginScreen} />
                    <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
              </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}