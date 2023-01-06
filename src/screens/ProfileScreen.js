import React, { useEffect, useState, useContext } from "react";
import { View, StyleSheet, Text } from "react-native";

// Local components import
import DarkBackgroundS from "../components/atoms/DarkBackgroundS";
import { AuthContext } from "../context/auth";

import { theme } from '../core/theme';

export default function ProfileScreen () {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [state, setState] = useContext(AuthContext);

    useEffect(() => {
        if (state) {
            if(state.user === null) {
                return;
            }

            const {id, username, email} = state.user
            setUsername(username);
            setEmail(email);
        }
    }, [state]);

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
                        <Text>2 {'\n'}</Text>
                        <Text >READING LIST</Text>
                    </Text>

                    <Text style={styles.stats}>
                        <Text>1 {'\n'}</Text>
                        <Text >WORK</Text>
                    </Text>
                </View>
            </View>

            <View style={styles.booksContainer}>
                <Text> Your books will be here </Text> 
            </View>
        </DarkBackgroundS>
    );
}

const styles = StyleSheet.create({
    infoText: { color: theme.colors.text, fontSize: 17, alignSelf: "center"},
    backStyle: { flex: 0, paddingTop: 25, width: '100%',},
    
    container: {
        flex: 2,
        backgroundColor: theme.colors.darkBox,
        borderRadius: 15,
        paddingTop: 20,
    },

    statsContainer: {
        flex: 0,
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
    },

    stats: {
        color: theme.colors.text,
        margin: 3,
    },

    booksContainer: {
        flex: 6,
    },

    rulerStyle: {
        borderBottomColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});