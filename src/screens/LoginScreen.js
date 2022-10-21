import React, { useState } from 'react';
import { View } from 'react-native';

// Local atoms
import Button from '../components/atoms/Button';
import TextInput from '../components/atoms/TextInput';
import Background from '../components/atoms/LoginBackground';
import Header from '../components/atoms/Header';

const LoginScreen = ({navigation}) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    
    // TODO: Handle possible input errors
    
    return (
        <Background>
            <Header>Welcome Back</Header>

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

            <TextInput
                label="Password"
                returnKeyType="done"
                value={userPassword.value}
                onChangeText={(text) => setUserPassword({ value: text, error: '' })}
                error={!!userPassword.error}
                errorText={userPassword.error}
                secureTextEntry
            />

            <Button mode="contained">
                Login
            </Button>

        </Background>
    )
};

export default LoginScreen;