import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import { theme } from '../../core/theme';

export default function Button({ mode, style, ...props }) {
    return (
        <PaperButton
            style={[
                styles.button,
                mode === 'outlined' && { backgroundColor: theme.colors.background },
                style
            ]}
            labelStyle={styles.text}
            mode={mode}
            {...props}
        />
    );
}

const styles = StyleSheet.create({
    button: {
        width: '90%',
        marginVertical: 10,
        paddingVertical: 2,
        backgroundColor: theme.colors.primary,
        borderRadius: 15,
        shadowColor: 'black',
    },
    
    text: {
        color: theme.colors.text,
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 26,
    }, 
});