import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { AuthProvider } from "../context/auth";
import NavigationScreen from "../screens/NavigationScreen";

export default function Navigation() {
    return (
        <NavigationContainer>
            <AuthProvider>
                <NavigationScreen/>
            </AuthProvider>
        </NavigationContainer>
    );
}