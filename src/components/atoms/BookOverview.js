import React from "react";
import { View } from "react-native";

export default function BookOverview() {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/no_cover_book.png')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 10 + getStatusBarHeight(),
        left: 10,
    },

    image: {
        width: 50,
        hegiht: 50,
    }
});