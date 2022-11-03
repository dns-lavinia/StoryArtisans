import React from "react";

// Local atom imports
import DarkBackground from "../components/atoms/DarkBackground";
import Header from "../components/atoms/Header";
import Button from "../components/atoms/Button";

export default function HomeScreen ({ navigation }) {
    return (
        <DarkBackground>
            <Header>This is the home screen.</Header>
            <Button
                mode="contained"
                onPress={() =>
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'StartScreen' }],
                })
                }
            >
                Logout
            </Button>
        </DarkBackground>
    );
}