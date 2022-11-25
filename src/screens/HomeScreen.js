import React from "react";
import axios from "axios";

// Local atom imports
import DarkBackground from "../components/atoms/DarkBackground";
import Header from "../components/atoms/Header";
import Button from "../components/atoms/Button";

export default function HomeScreen ({ navigation }) {
    // TODO: this function will have to be moved either to profile
    // page or associated with a button that logouts which would
    // be visible from all pages
    const onLogOutPressed = async () => {
        const resp = await axios
            .post("http://localhost:8080/api/auth/signout")
            .then((res) => {
                response = res.data.message;
            })
            .catch((err) => {
                response = err;
            });

        if (response == "You've been signed out!") {
          navigation.reset({
            index: 0,
            routes: [{ name: "StartScreen" }],
          });
        }
    };

    return (
        <DarkBackground>
            <Header>This is the home screen.</Header>
            <Button
                mode="contained"
                onPress={onLogOutPressed}
            >
                Logout
            </Button>
        </DarkBackground>
    );
}