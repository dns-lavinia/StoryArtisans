import React from "react";
import { Image, StyleSheet } from "react-native";

export default function Logo({ ...props }) {
    return <Image source={require('../../assets/images/sa_logo.png')} style={styles.image} {...props} />;
}

const styles = StyleSheet.create({
    image: {
        width: 231,
        hegiht: 140,
        marginBottom: 8,
    }
});