import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import axios from 'axios';

import { theme } from "../core/theme"; 

// Local atoms import 
import Background from "../components/atoms/LoginBackground";
import BackButton from "../components/atoms/BackButton";
import TextInput from "../components/atoms/TextInput";
import Header from "../components/atoms/Header";
import Button from "../components/atoms/Button";

// utils import
import { emailValidator } from '../utils/emailValidator';
import { passwordValidator } from '../utils/passwordValidator';
import { nameValidator } from '../utils/nameValidator';

export default function RegisterScreen({ navigation }) {
    const [username, setUsername] = useState({ value: '', error: '' })
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })

    const onRegisterPressed = async () => {
        const usernameError = nameValidator(username.value);
        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value);

        if (emailError || passwordError || nameError) {
          setUsername({ ...username, error: usernameError });
          setEmail({ ...email, error: emailError });
          setPassword({ ...password, error: passwordError });
          return;
        }

        const resp = await axios.post("http://localhost:8000/auth/signup", { username, email, password });

        if(resp.data.error)
            alert(resp.data.error);
        else
            alert("Login in successfully");

        navigation.reset({
          index: 0,
          routes: [{ name: 'BottomTabNavigator' }],
        });
    }

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
                onPress={onRegisterPressed}
                style={{ marginTop: 24 }}
            >
                Sign Up
            </Button>

            {/* Link to the Login page */}
            <View style={styles.row}>
                <Text style={styles.textBeforeLink}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
                    <Text style={styles.link}>Login</Text>
                </TouchableOpacity>
            </View>

        </Background>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },

    textBeforeLink: {
        color: theme.colors.darkText,
    },

    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
})