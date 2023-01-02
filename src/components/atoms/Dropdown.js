import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

import { theme } from '../../core/theme';

const data = [
    { label: 'Action', value: '1' },
    { label: 'Drama', value: '2' },
    { label: 'Fantasy', value: '3' },
    { label: 'Horror', value: '4' },
    { label: 'Mystery', value: '5' },
    { label: 'Poetry', value: '6' },
    { label: 'S.F.', value: '7' },
];

export default function DropdownComponent() {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.tStyle}> CHOOSE TAG </Text>

            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'black' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select item' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                setValue(item.value);
                setIsFocus(false);
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.darkPurple,
        padding: 16,
        borderRadius: 15,
        width: "90%",
        alignItems: "flex-start",
        marginTop: 10,
        marginBottom: 10,
    },

    dropdown: {
        height: 26,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        width: "100%",
    },

    icon: {
        marginRight: 5,
    },

    placeholderStyle: {
        fontSize: 16,
    },
    
    selectedTextStyle: {
        fontSize: 16,
    },

    iconStyle: {
        width: 20,
        height: 20,
    },

    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },

    tStyle: {
        fontSize: 15,
        lineHeight: 21,
        marginBottom: 10,
        alignSelf: "flex-start"
    }
});