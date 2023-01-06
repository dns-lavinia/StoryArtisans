import React, { useState } from "react";
import { View, StyleSheet, ScrollView, SafeAreaView, StatusBar, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";

import DarkBackgroundS from "../components/atoms/DarkBackgroundS";
import IconButton from "../components/atoms/IconButton";
import TextInput from "../components/atoms/TextInput";
import Header from "../components/atoms/Header";
import DropdownComponent from "../components/atoms/Dropdown";

import { theme } from '../core/theme';
import Button from "../components/atoms/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function WriteScreen ({ navigation }) {
    const [bookTitle, setBookTitle] = useState({ value: '', error: '' });
    const [bookTag, setBookTag] = useState({ value: '', error: '' });
    const [bookContent, setBookContent] = useState({ value: '', error: '' });
    const [uploadImage, setUploadImage] = useState("");
    const [showImgFlag, setShowImgFlag] = useState(false);

    // Flags used to display a message in case of empty/unselected tag/image
    const [tagErrorFlag, setTagErrorFlag] = useState(false);
    const [imgErrorFlag, setImgErrorFlag] = useState(false);

    // Set the new tag selected from the dropdown
    const setNewTag = (item) => {
        setBookTag({ value: item.value, error: '' });    
    }

    // handler for the upload of book cover picture
    const handleUpload = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if(permissionResult.granted === false) {
            alert("Camera access is required.");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
            base64: true,
        });

        if(pickerResult.cancelled === true) {
            return;
        }

        let base64Image = `data:image/jpg;base64,${pickerResult.base64}`;
        setUploadImage(base64Image);
        setShowImgFlag(true);
    };

    const handleStoryPost = async () => {
        let storeData = await AsyncStorage.getItem("auth-rn");
        const parsed = JSON.parse(storeData);

        // Make sure that previous error messages disappear 
        // if the field is not empty, for tag or image
        setTagErrorFlag(false);
        setImgErrorFlag(false);

        // get the username
        let uid = parsed.user.id;

        // get the story title
        let title = bookTitle.value;

        // get the story genre tag
        let tag = bookTag.value;

        // get the story text
        let storyText = bookContent.value;

        // get the story cover 
        let img = uploadImage;

        // Error checks
        if(title === "" || title === null) {
            setBookTitle({ ...bookTitle, error: "Title must not be empty"});
            return;
        }

        if(storyText === "" || storyText === null) {
            setBookContent({ ...bookContent, error: "Your story must not be empty"});
            return;
        }

        // TODO: print a message when this happens
        if(tag === "" || tag === null) {
            setTagErrorFlag(true);
            return;
        }

        if(img === "" || img === null) {
            setImgErrorFlag(true);
            return;
        }
        
        // When using an android emulator with expo-go 
        // use 10.0.2.2 instead of localhost
        // NOTE: this post request will have to be placed at the end alongside other data
        // const { data } = await axios.post("http://localhost:8080/api/compose/upload-image", {
        //     image: base64Image,
        //     user: parsed.user
        // });

        // console.log("UPLOAD RESPONSE => ", data);
        setTimeout(() => {
            alert("Story posted");
            navigation.navigate("ComposeScreen");
        }, 500);
    }
    
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
                <DropdownComponent setNewTag={(item) => setNewTag(item)}/>

                {tagErrorFlag? 
                    <Text style={{color: "red", paddingBottom: 10}}>
                        Your story must have a genre.
                    </Text> 
                    : ""
                }

                {/* Button to upload a book cover image */}
                <Button 
                    style={styles.btnStyle} textStyle={styles.pictStyle}
                    onPress={handleUpload}> 
                    Upload cover picture 
                </Button>

                {showImgFlag? 
                    <Text style={{color: theme.colors.text, paddingBottom: 10}}>
                        Successfully uploaded image.
                    </Text> 
                    : ""
                }

                {imgErrorFlag? 
                    <Text style={{color: "red", paddingBottom: 10}}>
                        An image must be selected.
                    </Text> 
                    : ""
                }   

                {/* Button that posts the story */}
                <Button 
                    style={{backgroundColor: theme.colors.darkPurple, width: "50%"}}
                    onPress={handleStoryPost}>
                    POST
                </Button>
            </ScrollView>
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