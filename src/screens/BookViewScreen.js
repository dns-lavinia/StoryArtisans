import React, {useState, useEffect, useContext} from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

// Local atom imports
import DarkBackgroundS from "../components/atoms/DarkBackgroundS";
import IconButton from "../components/atoms/IconButton";
import Button from "../components/atoms/Button";

import { theme } from '../core/theme';
import { AuthContext } from "../context/auth";

export default function BookViewScreen ({route, navigation}) {
    const [story, setStory] = useState("");
    const [savedFlag, setSavedFlag] = useState(false);
    const [showFlag, setShowFlag] = useState(true);
    const [state, setState] = useContext(AuthContext);
    // console.log(route.params);

    useEffect(() => {
        fetchContent();
    }, []);

    const fetchContent = async () => {
        // Fetch the book content from the server
        var queryData = {
            id: route.params.id,
            title: route.params.title
        };

        console.log(queryData);

        // Based on the username and title, get the content of the book
        // const { content } = await axios.get("http://10.0.2.2:8080/api/books", queryData);
        // setStory(story);

        // compute the state of the savedFlag 

        // do not show the saved Flag if the user sees his book
        if(state.user.id === route.params.id) {
            setShowFlag(false);
        }
    };

    const SaveBook = async () => {
        // Save the book into the Reading list
        var queryData = {
            username: route.params.author,
            title: route.params.title
        };

        setSavedFlag(!savedFlag);

        console.log(queryData);
    };

    return (
        <DarkBackgroundS>
            {/* Header and title parts */}
            <View style={styles.container}>
                <View style={styles.headerStyle}>
                    <IconButton
                        icon="arrow-left"
                        iconColor={theme.colors.firstColors}
                        onPress={() => navigation.goBack()}
                        size={30}
                    />

                    {showFlag? 
                        <View style={styles.saveBtn}>
                            <Button onPress={SaveBook}>
                                {savedFlag? <Text>Saved</Text> : <Text>Save book</Text>}
                            </Button>
                        </View>
                        :
                        ""
                    }
                </View>
                    
                <Text style={styles.info}>Title: {route.params.title}</Text>
                <Text style={[styles.info, {fontSize: 15}]}>
                    By {showFlag? route.params.author : "you"}
                </Text> 
            </View>

            <View style={styles.rulerStyle}/>
            <View style={styles.rulerStyle2}/>

            <ScrollView>
                <View style={styles.story}>
                    <Text style={styles.storyText}>
                        {story}
                    </Text>
                </View>
            </ScrollView>
        </DarkBackgroundS>
    );
}

const styles = StyleSheet.create({
    backStyle: {
        flex: 0,
        paddingTop: 25,
        width: '100%',
    },

    headerStyle: {
        flex: 0,
        flexDirection: "row",
    },

    titleStyle: {
        fontSize: 22,
        alignSelf: "center",
        textAlign: "right",
        paddingLeft: 60,
    },

    saveBtn: {
        width: "40%",
        alignSelf: "stretch",
        marginLeft: 150,
    },

    container: {
        backgroundColor: theme.colors.darkBox,
        borderRadius: 15,
        paddingBottom: 20
    },

    info: {
        alignSelf: "center",
        fontSize: 20,
        color: theme.colors.text,
    },

    story: {
        backgroundColor: theme.colors.darkPurpleBox,
        borderRadius: 15,
        marginTop: 10,
    },

    storyText: {
        color: theme.colors.text,
        fontSize: 18,
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
    },

    rulerStyle: {
        borderBottomColor: 'white',
        paddingBottom: 2,
        borderRadius: 45,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    rulerStyle2: {
        borderBottomColor: theme.colors.primary,
        paddingBottom: 2,
        borderBottomWidth: 3,
        borderRadius: 45,
    },
});