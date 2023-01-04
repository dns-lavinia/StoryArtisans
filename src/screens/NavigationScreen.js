import React, { useContext } from "react";
import { AuthContext } from "../context/auth";
import { createStackNavigator } from '@react-navigation/stack';

// Screen imports
import {
    LoginScreen, StartScreen, RegisterScreen, SearchResultScreen, WriteScreen
} from '.';

import BottomTabNavigator from '../navigation/BottomTabNavigator';

// Create a stack that will keep the screens
const RootStack = createStackNavigator();

export default function NavigationScreen() {
    const [state, setState] = useContext(AuthContext);
    const authenticated = state && state.token !== "" && state.user !== null;

    return (
        <RootStack.Navigator
            initialRouteName="StartScreen"
            screenOptions={{
                headerShown: false,
            }}
        >   
            {authenticated?
            (   <>
                    <RootStack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
                    <RootStack.Screen name="SearchResultScreen" component={SearchResultScreen} />
                    <RootStack.Screen name="WriteScreen" component={WriteScreen} />
                </>
            )
            : (
                <>
                    <RootStack.Screen name="StartScreen" component={StartScreen} />
                    <RootStack.Screen name="LoginScreen" component={LoginScreen} />
                    <RootStack.Screen name="RegisterScreen" component={RegisterScreen} />
                    
                </>
            )}
        </RootStack.Navigator>
    );
}