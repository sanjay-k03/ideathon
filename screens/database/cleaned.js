import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

function Cleaned({navigation}) {
    const [cleanedList, setCleanedList] = useState([
        {
            id: '1',
            title: 'Vembanad Lake',
        },
        {
            id: '2',
            title: 'Chilika Lake',
        },
        {
            id: '3',
            title: 'Shivaji Sagar Lake',
        },
        {
            id: '4',
            title: 'Indira Sagar lake',
        },
        {
            id: '5',
            title:'Nagarjuna Sagar Lake',
        },
        {
            id: '6',
            title: 'Chembarambakkam',
        },
        {
            id: '7',
            title: 'Kaliveli',
        },
        {
            id: '8',
            title: 'Umiam Lake',
        },
    ]);
    return (
        <View style={styles.Container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}> Cleaned Lakes</Text>
            </View>
            <View style={styles.bodyContainer}>
                <FlatList
                    data={cleanedList}
                    showsVerticalScrollIndicator={false}
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

export default Cleaned

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