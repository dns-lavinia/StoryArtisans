import React, { useState } from 'react';
import { Text } from 'react-native-paper';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { theme } from '../core/theme';

// Local atoms
import Button from '../components/atoms/Button';
import TextInput from '../components/atoms/TextInput';
import Background from '../components/atoms/LoginBackground';
import Header from '../components/atoms/Header';
import BackButton from '../components/atoms/BackButton';

const LoginScreen = ({navigation}) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    
    // TODO: Handle possible input errors
    const onLoginPressed = () => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'BottomTabNavigator' }],
        })
    }
    
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