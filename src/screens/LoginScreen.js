import React, { useState } from 'react';
import { Text } from 'react-native-paper';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

import { theme } from '../core/theme';

// Local atoms
import Button from '../components/atoms/Button';
import TextInput from '../components/atoms/TextInput';
import Background from '../components/atoms/LoginBackground';
import Header from '../components/atoms/Header';
import BackButton from '../components/atoms/BackButton';

// Utils import
import { emailValidator } from '../utils/emailValidator';
import { passwordValidator } from '../utils/passwordValidator';

const LoginScreen = ({navigation}) => {
    const [userEmail, setUserEmail] = useState({ value: "", error: "" });
    const [userPassword, setUserPassword] = useState({ value: "", error: "" });
    
    const onLoginPressed = async () => {
        const emailError = emailValidator(userEmail.value);
        const passwordError = passwordValidator(userPassword.value);

        if (emailError || passwordError) {
            setUserEmail({ ...userEmail, error: emailError });
            setUserPassword({ ...userPassword, error: passwordError });
            return;
        }

        try {
            var signin_data = {
              email: userEmail.value,
              password: userPassword.value,
              roles: ["user"],
            };
            
            let response;
            
            // When using an android emulator with expo-go 
            // use 10.0.2.2 instead of localhost
            await axios
                .post("http://localhost:8080/api/auth/signin", signin_data)
                .then((res) => {
                    response = res.data;
                })
                .catch((err) => {
                    // TODO: revert this later
                    // response = err.response.data.message;
                    response = "";
                });
              
            // response = response.toString();
            if (response === "User Not found.") {
                setUserEmail({ ...userEmail, error: "No account exists with this email" });
            } else if (response === "Invalid Password!") {
                setUserPassword({ ...userPassword, error: "Incorrect password" });
            } else {
                navigation.reset({
                    index: 0,
                    routes: [{ name: "BottomTabNavigator" }],
                });
            }

            // TODO: delete this later
            navigation.reset({
                index: 0,
                routes: [{ name: "BottomTabNavigator" }],
            })
        } catch (err) {
            console.log(err);
        }
    };
    
    return (
        <Background>
            <BackButton goBack={navigation.goBack} />
            <Header>Welcome Back</Header>

            {/* Email input text box */}
            <TextInput
                label="Email"
                returnKeyType="next"
                value={userEmail.value}
                onChangeText={(text) => setUserEmail({ value: text, error: ''})}
                error={!!userEmail.error}
                errorText={userEmail.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />

            {/* Password input text box */}
            <TextInput
                label="Password"
                returnKeyType="done"
                value={userPassword.value}
                onChangeText={(text) => setUserPassword({ value: text, error: '' })}
                error={!!userPassword.error}
                errorText={userPassword.error}
                secureTextEntry
            />

            <Button mode="contained" onPress={onLoginPressed}>
                Login
            </Button>

            {/* Link to the Login page */}
            <View style={styles.row}>
                <Text style={styles.textBeforeLink}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
                    <Text style={styles.link}>Register</Text>
                </TouchableOpacity>
            </View>

        </Background>
    )
};

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

export default LoginScreen;