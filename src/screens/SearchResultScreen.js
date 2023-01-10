import React, { useContext, useEffect } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import { Text } from "react-native-paper";

import DarkBackgroundS from "../components/atoms/DarkBackgroundS";
import Header from "../components/atoms/Header";
import IconButton from "../components/atoms/IconButton";
import Button from "../components/atoms/Button";

import { theme } from '../core/theme';

// local context import 
import { BookContext } from "../context/book";

export default function SearchResultScreen ({ route, navigation }) {
    const [books, setBooks] = useContext(BookContext);

    let fakebooks = ([  {id: 1, title: "book1", username: "User1"}, 
                        {id: 2, title: "book2", username: "User2"}]);

    useEffect(() =>{
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        // to get the parameters passed in the SearchScreen -> route.params
        var tag = {tag: route.params.tagName};
        console.log(tag);

        // const { bookData } = await axios.get("http://10.0.2.2:8080/api/books", tag);
        // setBooks(bookData);
    };

    // based on the tag, fetch books

    // render the book areas + touch handler for certain book
    // rendering means -> add the image, add the Author (username) and the
    // summary or short description text 

    // have to ad onRefresh method that will fetch posts when the screen is
    // pulled downwards

    const viewBook = (item) => {
        navigation.navigate("BookViewScreen", {
            id: item.id,
            author: item.username,
            title: item.title,
        });
    }

    return (
        <DarkBackgroundS style={styles.backStyle}>
            {/* Header and title parts */}
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

            {/* Actual book rendering part */}
            <ScrollView style={styles.bookRsltStyle}>
                {fakebooks && fakebooks.map(item => (
                    // Add key based on 
                    <TouchableOpacity key={item.id} onPress={() => viewBook(item)}>
                        <View key={item.id} style={styles.bookStyle}>
                            <Image source={require('../assets/images/no_cover_book.png')}/>

                            <View style={styles.bookInfo}>
                                <Text style={styles.info}>Title: {item.title}</Text>
                                <Text style={styles.info}>Author: {item.username}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
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
        paddingLeft: 30,
    },

    subtitleStyle: {
        fontSize: 19,
        alignSelf: 'stretch',
        paddingBottom: 5,
        marginBottom: 20,
        width: '100%',
        backgroundColor: theme.colors.darkPurple
    },
    
    bookRsltStyle: {
        padding: 5,
    },

    bookStyle: {
        paddingBottom: 25,
        flexDirection: "row",
    },

    bookInfo: {
        padding: 10,
    }, 

    info: {
        paddingBottom: 10,
    }
});