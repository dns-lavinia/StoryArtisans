import React, { useState } from "react";

// Local atoms import 
import Background from "../components/atoms/LoginBackground";
import BackButton from "../components/atoms/BackButton";
import TextInput from "../components/atoms/TextInput";
import Header from "../components/atoms/Header";
import Button from "../components/atoms/Button";

export default function RegisterScreen({ navigation }) {
    const [username, setUsername] = useState({ value: '', error: '' })
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })

    return (
        <Background>
            <BackButton goBack={navigation.goBack} />
            <Header>Register Here</Header>

            {/* Username text input */}
            <TextInput
                label="Username"
                returnKeyType="next"
                value={username.value}
                onChangeText={(text) => setUsername({ value: text, error: '' })}
                error={!!username.error}
                errorText={username.error}
            />

            {/* Email text input */}
            <TextInput
                label="Email"
                returnKeyType="next"
                value={email.value}
                onChangeText={(text) => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />

            {/* Password text input */}
            <TextInput
                label="Password"
                returnKeyType="done"
                value={password.value}
                onChangeText={(text) => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
            />

            {/* Password confirmation text input */}
            <TextInput
                label="Confirm Password"
                returnKeyType="done"
                value={password.value}
                onChangeText={(text) => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
            />
            
            <Button
                mode="contained"
                style={{ marginTop: 24 }}
            >
                Sign Up
            </Button>

        </Background>
    );
}