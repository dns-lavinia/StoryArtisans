import React from "react";
import { StyleSheet, RefreshControl, View, Image } from "react-native";

import DarkBackground from "../components/atoms/DarkBackground";
import Header from "../components/atoms/Header";
import IconButton from "../components/atoms/IconButton";
import Button from "../components/atoms/Button";

import { theme } from '../core/theme';

export default function SearchResultScreen ({ route, navigation }) {
    // to get the parameters passed in the SearchScreen -> route.params
    console.log(route.params);

    // based on the tag, fetch books

    // render the book areas + touch handler for certain book
    // rendering means -> add the image, add the Author (username) and the
    // summary or short description text 

    // have to ad onRefresh method that will fetch posts when the screen is
    // pulled downwards

    return (
        <DarkBackground style={styles.backStyle}>
            <View style={styles.headerStyle}>
                <IconButton
                        icon="arrow-left"
                        iconColor={theme.colors.firstColors}
                        onPress={() => navigation.goBack()}
                        size={30}
                />

                <Header style={styles.titleStyle}> Search Results </Header>
            </View>
            <Button style={styles.subtitleStyle}>Tag: {route.params["tagName"]}</Button>


            <View style={styles.bookRsltStyle}>
                <View style={styles.bookStyle}>
                    <Image source={require('../assets/images/no_cover_book.png')}/>
                </View>

                <View style={styles.bookStyle}>
                    <Image source={require('../assets/images/no_cover_book.png')}/>
                </View>

                <View style={styles.bookStyle}>
                    <Image source={require('../assets/images/no_cover_book.png')}/>
                </View>
            </View>

        </DarkBackground>
    );
}

const styles = StyleSheet.create({
    backStyle: {
        flex: 0,
        paddingTop: 25,
        width: '100%',
        // maxWidth: 340,
        // alignSelf: 'center',
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    headerStyle: {
        flex: 0,
        flexDirection: "row",
    },

    titleStyle: {
        // alignContent: "right",
        fontSize: 22,
        alignSelf: "center",
        textAlign: "right",
        paddingLeft: 30,
    },

    subtitleStyle: {
        fontSize: 19,
        alignSelf: 'stretch',
        paddingBottom: 5,
        marginBottom: 25,
        width: '100%',
        backgroundColor: theme.colors.darkPurple
    },
    
    bookRsltStyle: {
        padding: 5,
    },

    bookStyle: {
        paddingBottom: 30,
    }
});