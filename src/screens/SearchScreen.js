import React from "react";
import { StyleSheet, View } from "react-native";

// Local import screen
import DarkBackground from "../components/atoms/DarkBackground";
import Paragraph from "../components/atoms/Paragraph";
import Button from "../components/atoms/Button";
import { useNavigation } from "@react-navigation/native";

import { theme } from '../core/theme';

let renderButtons = () => {
    let tags = ['Action', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Poetry', 'S.F.'];
    const buttons = [];
    const navigation = useNavigation();

    const onTagPressed = (tag_name) => {
        console.log("Retrieve books with the tag " + tag_name);
        navigation.navigate('SearchResultScreen', {tagName: tag_name} );
    };

    for(let i = 0; i < tags.length; i += 2) {

        // If there is an odd number of tags, render the last row differently
        if(i === (tags.length - 1)) {
            buttons.push(
                <View style={styles.buttonContainer} key={i}>
                    <Button 
                        key={i}
                        onPress={() => onTagPressed(tags[i])}
                        style={styles.buttonStyle} 
                        labelStyle={styles.buttonText}>
                            {tags[i]}
                    </Button>
                </View>
            );
        } else {
            buttons.push(
                <View style={styles.buttonContainer} key={i}>
                    <Button 
                        key={i}
                        onPress={() => onTagPressed(tags[i])}
                        style={styles.buttonStyle} 
                        labelStyle={styles.buttonText}>
                            {tags[i]}
                    </Button>
                    
                    <Button 
                        key={i+1}
                        name={tags[i+1]}
                        onPress={() => onTagPressed(tags[i+1])}
                        style={styles.buttonStyle}
                        labelStyle={styles.buttonText}>
                            {tags[i+1]}
                    </Button>
                </View>
            );
        }
    }

    return buttons;
};

export default function SearchScreen ({navigation}) {
    // I'm thinking I would get the labels themselves
    // from a database and create as many buttons as 
    // needed in alphabetical order 

    // for now the tags are hardoded
    
    return (
        <DarkBackground style={styles.backStyle}>
            <Paragraph style={styles.ParagraphStyle}> Browse Tags </Paragraph> 

            <View>
                {renderButtons(navigation)}
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
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: 'center',
    },

    buttonStyle: {
        width: '45%',
        padding: 10,
        margin: 10,
        height: 52,
        backgroundColor: theme.colors.borderColor,
        borderRadius: 5,
    },

    buttonText: {
        color: theme.colors.darkText,
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 26,
    }
});