import React from "react";

// Local atom imports
import Background from "../components/atoms/LoginBackground";
import Header from "../components/atoms/Header";
import Button from "../components/atoms/Button";

export default function HomeScreen ({ navigation }) {
    return (
        <Background>
            <Header>This is the home screen</Header>
            <Button
                mode="outlined"
                onPress={() =>
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'StartScreen' }],
                })
                }
            >
                Logout
            </Button>
        </Background>
    );
}