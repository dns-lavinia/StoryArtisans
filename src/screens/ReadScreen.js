import React, { useContext, useEffect } from "react";
import { StyleSheet, ScrollView, TouchableOpacity, View, Image } from "react-native";
import { Text } from "react-native-paper";

// local components import
import DarkBackground from "../components/atoms/DarkBackground";
import Paragraph from "../components/atoms/Paragraph";
import { AuthContext } from "../context/auth";
import { BookContext } from "../context/book";

export default function ReadScreen ({ navigation }) {
    const [books, setBooks] = useContext(BookContext);
    const [state, setState] = useContext(AuthContext);

    let fakebooks = ([  {id: 1, title: "book1", username: "User1"}, 
                        {id: 2, title: "book2", username: "User2"}]);

    useEffect(() =>{
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        // to get the parameters passed in the SearchScreen -> route.params
        var query = {id: state.user.id};
        console.log(query);

        // const { bookData } = await axios.get("http://10.0.2.2:8080/api/saved-books", query);
        // setBooks(bookData);
    };

    const viewBook = (item) => {
        navigation.navigate("BookViewScreen", {
            id: item.id,
            author: item.username,
            title: item.title,
        });
    }

    return (
        <DarkBackground>
            <Paragraph style={styles.ParagraphStyle}> Read Now </Paragraph> 

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
        </DarkBackground>
    );
}

const styles = StyleSheet.create({
    ParagraphStyle: {
        textAlign: 'left',
        fontWeight: 'bold',
        textAlignVertical: 'top',
        fontSize: 19,
        marginTop: 15,
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