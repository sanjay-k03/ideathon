import { Text, View, StyleSheet } from 'react-native';
import React from 'react';

function Title({titleText}) {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{titleText}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    titleContainer: {
        width: '100%',
        backgroundColor: '#009DF7',
        height: '10%',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        marginBottom: '1%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontFamily: 'Poppins-Medium',
        color: '#ffffff',
        fontSize: 30,
        fontWeight: "500",
    },
})
export default Title;