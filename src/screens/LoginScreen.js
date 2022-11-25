import React, { useState } from 'react';
import { Text } from 'react-native-paper';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import e from "cors";

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
    
    // TODO: Handle possible input errors
    const onLoginPressed = async () => {
        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value);

        if (emailError || passwordError) {
            setUserEmail({ ...email, error: emailError });
            setUserPassword({ ...password, error: passwordError });
            return;
        }

        try {
            var signin_data = {
              email: userEmail.value,
              password: userPassword.value,
              roles: ["user"],
            };
            
            let response = "";
            
            await axios
                .post("http://localhost:8080/api/auth/signin", signin_data)
                .then((res) => {
                    response = res.data;
                })
                .catch((err) => {
                    response = err.response.data.message;
                });
              
            response = response.toString();
            if (response == "User Not found.") {
                console.log("n-am gasit user");
            } else if (response == "Invalid Password!") {
                console.log("nu-i buna parola");
            } else {
                const emailError = emailValidator(userEmail.value);
                const passwordError = passwordValidator(userPassword.value);
                
                if (emailError || passwordError) {
                    setUserEmail({ ...userEmail, error: emailError });
                    setUserPassword({ ...userPassword, error: passwordError });
                    return;
                }
              
                navigation.reset({
                    index: 0,
                    routes: [{ name: "BottomTabNavigator" }],
                });
            }
          } catch (e) {
            console.log(e);
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