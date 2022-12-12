import React from "react";
import { StyleSheet, View } from "react-native";

// Local import screen
import DarkBackground from "../components/atoms/DarkBackground";
import Paragraph from "../components/atoms/Paragraph";
import Button from "../components/atoms/Button";

import { theme } from '../core/theme';

export default function SearchScreen () {
    // I'm thinking I would get the labels themselves
    // from a database and create as many buttons as 
    // needed in alphabetical order 

    // for now the tags are hardoded
    let tags = ['Action', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Poetry'];
    
    return (
        <DarkBackground style={styles.backStyle}>
            <Paragraph style={styles.ParagraphStyle}> Browse Tags </Paragraph> 
            
            <View style={styles.buttonContainer}>
                <Button 
                    style={styles.leftButtonStyle} 
                    labelStyle={styles.buttonText}>
                        Action
                </Button>
                
                <Button 
                    style={styles.rightButtonStyle}
                    labelStyle={styles.buttonText}>
                        Drama
                </Button>
            </View>
        </DarkBackground>
    );
}

const styles = StyleSheet.create({
    ParagraphStyle: {
        textAlign: 'left',
        fontWeight: 'bold',
        textAlignVertical: 'top',
        fontSize: 19
    },
 
    backStyle: {
        flex: 0,
    },

    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: 'center',
    },

    leftButtonStyle: {
        width: '45%',
        height: 52,
        backgroundColor: theme.colors.borderColor,
        borderRadius: 5,
    },

    rightButtonStyle: {
        width: '45%',
        height: 52,
        backgroundColor: theme.colors.borderColor,
        borderRadius: 5,
    },

    buttonText: {
        color: theme.colors.darkText,
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 26,
    }
});