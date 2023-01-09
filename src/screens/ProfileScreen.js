import React, { useEffect, useState, useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

// Local components import
import DarkBackgroundS from "../components/atoms/DarkBackgroundS";
import { AuthContext } from "../context/auth";
import { BookContext } from "../context/book";

import { theme } from '../core/theme';

export default function ProfileScreen ({ navigation }) {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [state, setState] = useContext(AuthContext);
    const [readingList, setReadingList] = useState(0);
    const [works, setWorks] = useState(0);
    const [books, setBooks] = useContext(BookContext);

    let fakebooks = ([  {title: "book1"}, 
                        {title: "book2"}]);

    useEffect(() => {
        if (state) {
            if(state.user === null) {
                return;
            }
            
            // Show the username and email of the logged user
            const {id, username, email} = state.user
            setUsername(username);
            setEmail(email);

            // Show the reading list and number of works
            var query = {id: id};
            // const { booksInfo } = await axios.get("http://10.0.2.2:8080/api/profile-books", query);

            setReadingList(2);
            setWorks(1);

            fetchBooks(id);
        }
    }, [state]);

    const fetchBooks = async (id) => {
        // to get the parameters passed in the SearchScreen -> route.params
        var query = {id: id};
        console.log(query);

        // const { bookData } = await axios.get("http://10.0.2.2:8080/api/my-books", query);
        // setBooks(bookData);
    };

    const viewBook = (item) => {
        navigation.navigate("BookViewScreen", {
            title: item.title,
            author: item.username,
        });
    }

    return (
        <DarkBackgroundS>
            {/* Header and title parts */}
            <View style={styles.container}>
                <View style={{flex: 1}}>
                    <Text style={styles.infoText}>
                        <Text style={{fontWeight: 'bold', color: theme.colors.primary}}> USERNAME:</Text>
                        <Text> {username}</Text>
                    </Text>

                    <Text style={styles.infoText}>
                        <Text style={{fontWeight: 'bold', color: theme.colors.primary}}> EMAIL:</Text>
                        <Text> {email}</Text>
                    </Text>
                </View>

                <View style={styles.statsContainer}>
                    <Text style={styles.stats}>
                        <Text>{readingList} {'\n'}</Text>
                        <Text >READING LIST</Text>
                    </Text>

                    <Text style={styles.stats}>
                        <Text>{works} {'\n'}</Text>
                        <Text >WORK</Text>
                    </Text>
                </View>
            </View>

            <View style={styles.rulerStyle}/>
            <View style={styles.rulerStyle2}/>

            <View style={[styles.container, {paddingTop: 0, margin: 0, flex: 0, marginTop: 15, paddingBottom: 5}]}>
                <Text style={styles.subHeaderStyle}> Your work</Text>
            </View>

            <View style={{flex: 6}}>
                <ScrollView style={styles.scrollContainer}>
                    {fakebooks && fakebooks.map(item => (
                        // Add key based on 
                        <TouchableOpacity key={item.id} onPress={() => viewBook(item)}>
                            <View key={item.id} style={styles.bookStyle}>
                                <Image source={require('../assets/images/no_cover_book.png')}/>

                                <View style={styles.bookInfo}>
                                    <Text style={styles.info}>Title: {item.title}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </DarkBackgroundS>
    );
}

const styles = StyleSheet.create({
    infoText: { color: theme.colors.text, fontSize: 17, alignSelf: "center"},
    backStyle: { flex: 0, paddingTop: 25, width: '100%',},
    stats: { color: theme.colors.text, margin: 3,},

    statsContainer: {
        flex: 0,
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
    },
    
    container: {
        flex: 2,
        backgroundColor: theme.colors.darkBox,
        borderRadius: 15,
        paddingTop: 20,
        marginBottom: 5,
    },

    scrollContainer: {
        flex: 5,
        borderRadius: 15,
        padding: 10,
    },

    rulerStyle: {
        borderBottomColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    bookInfo: { padding: 10, }, 
    info: { paddingBottom: 10, color: theme.colors.text },
    bookStyle: { paddingBottom: 25, flexDirection: "row", },

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

    subHeaderStyle : {
        alignSelf: "center",
        color: theme.colors.text,
        fontSize: 18,
    }
});