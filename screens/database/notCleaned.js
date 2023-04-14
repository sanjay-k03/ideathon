import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

function NotCleaned({navigation}) {
    const [notCleanedList, setNotCleanedList] = useState([
        {
            id: '1',
            title: 'Shivsagar 88%',
        },
        {
            id: '2',
            title: 'Bhojtal  76%',
        },
        {
            id: '3',
            title: 'Sasthamkotta  65%',
        },
        {
            id: '4',
            title: 'Kuttanad Lake  32%',
        },
        {
            id: '5',
            title: 'Ulsoor Lake  98%',
        },
        {
            id: '6',
            title: 'Agara Lake  77%',
        },
        {
            id: '7',
            title: 'Umiam Lake 56%',
        },
        {
            id: '8',
            title: 'Wular Lake  54%',
        },
    ]);

    return (
        <View style={styles.Container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}> Lakes to be Cleaned </Text>
            </View>
            <View style={styles.bodyContainer}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={notCleanedList}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.item} 
                        // onPress={()=>navigation.navigate('Homepage')}
                        >
                            <Text style={styles.itemText}>{item.title}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

export default NotCleaned

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fafafa'
    },
    titleContainer: {
        height: '10%',
        width: '90%',
        justifyContent: 'center',

    },
    titleText: {
        color: '#000',
        fontSize: 25,
        fontWeight: '600',
    },
    bodyContainer: {
        height: '90%',
        width: '100%',
        //backgroundColor:'#EEEEEE',
    },
    item:{
        padding:20,
        margin:10,
        borderRadius:20,
        backgroundColor:'#fff',
    },
    itemText:{
        color:'#000000',
    }
});