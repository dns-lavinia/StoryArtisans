import React, { useState } from "react";
import { View, StyleSheet, ScrollView, SafeAreaView, StatusBar, Text } from "react-native";

import DarkBackgroundS from "../components/atoms/DarkBackgroundS";
import IconButton from "../components/atoms/IconButton";
import TextInput from "../components/atoms/TextInput";
import Header from "../components/atoms/Header";
import DropdownComponent from "../components/atoms/Dropdown";

import { theme } from '../core/theme';
import Button from "../components/atoms/Button";

export default function WriteScreen ({ navigation }) {
    const [bookTitle, setBookTitle] = useState({ value: '', error: '' });
    const [bookTag, setBookTag] = useState({ value: '', error: '' });
    const [bookContent, setBookContent] = useState({ value: '', error: '' });
    
    return (
        <DarkBackgroundS style={styles.backStyle}>
            <View style={styles.headerStyle}>
                <IconButton
                        icon="arrow-left"
                        iconColor={theme.colors.firstColors}
                        onPress={() => navigation.goBack()}
                        size={30}
                />

                <Header style={styles.titleStyle}> Your story </Header>
            </View>

            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollStyle} contentContainerStyle={styles.chldStyle}>
                    <TextInput
                        label="Title"
                        returnKeyType="next"
                        value={bookTitle.value}
                        onChangeText={(text) => setBookTitle({ value: text, error: '' })}
                        error={!!bookTitle.error}
                        errorText={bookTitle.error}
                        style={styles.inputStyle}
                        theme={{
                            ...TextInput.theme, 
                            roundness: 15, 
                            colors: {text: theme.colors.text},
                        }}
                        activeOutlineColor={theme.colors.text}
                    />
                    
                    {/* Box for user to write the story */}
                    <Text style={styles.textStyle}> Write your story below: </Text>
                    <TextInput
                        multiline={true}
                        returnKeyType="next"
                        value={bookContent.value}
                        onChangeText={(text) => setBookContent({ value: text, error: '' })}
                        error={!!bookContent.error}
                        errorText={bookContent.error}
                        style={styles.contentBoxStyle}
                        theme={{
                            ...TextInput.theme, 
                            roundness: 15, 
                            colors: {text: theme.colors.text},
                            
                        }}
                        activeOutlineColor={theme.colors.text}
                    />

                    {/* Drowpdown menu so the user can choose the book genre */}
                    <DropdownComponent/>

                    {/* Button to upload a book cover image */}
                    <Button style={styles.btnStyle} textStyle={styles.pictStyle}> Upload cover picture </Button>

                    {/* Button that posts the story */}
                    <Button style={{backgroundColor: theme.colors.darkPurple, width: "50%"}}>
                        POST
                    </Button>
                </ScrollView>
            </SafeAreaView>

        </DarkBackgroundS>
    );
}

const styles = StyleSheet.create({
    backStyle: {
        flex: 0,
        paddingTop: 20,
        width: '100%',
    },

    headerStyle: {
        flexDirection: "row",
        alignSelf: "flex-start"
    },

    titleStyle: {
        fontSize: 22,
        alignSelf: "center",
        textAlign: "right",
        paddingLeft: 55,
    },

    subtitleStyle: {
        fontSize: 19,
        alignSelf: 'stretch',
        paddingBottom: 5,
        marginBottom: 25,
        width: '100%',
        backgroundColor: theme.colors.darkPurple
    },

    inputStyle: {
        backgroundColor: theme.colors.primary,
        text: theme.colors.text,
    },

    contentBoxStyle: {
        backgroundColor: theme.colors.darkBox,
        text: theme.colors.text,
        height: 400,
    },

    scrollStyle: {
        marginHorizontal: 10,
        centerContent: true
    },

    container: {
        flex: 1,
        width: "100%",
    },

    chldStyle: {
        alignItems: "center",
    },

    textStyle: {
        alignSelf: "flex-start",
        paddingLeft: 15,
        paddingTop: 15,
        fontSize: 17,
        color: theme.colors.text
    },

    pictStyle: {
        fontWeight: "normal",
        uppercase: false
    },
});