import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import Title from '../title';

function Organizations({ navigation }) {
    const [OrganizationsList, setOrganizationsList] = useState([
        {
            id: '1',
            title: 'Bhumi',
            icon:'https://cfstatic.give.do/3775b557-fcc0-4b35-8d72-531efb281f15.jpg'
        },
        {
            id: '2',
            title: 'Swades Foundation',
            icon:'https://cdn.givind.org/static/images/nonprofit/logo/swades-logo.jpg'
        },
        {
            id: '3',
            title: 'WOTR',
            icon:'https://cfstatic.give.do/a58076fb-dacc-45cc-8939-73374aedbfde.png'
        },
        {
            id: '4',
            title: 'Gramin Vikas Vigyan Samiti',
            icon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ29qBP8Bjn93H_r9OBp5jTyrigtoOtAuVwDlSwz7NyzQ&usqp=CAU&ec=48665699'
        },
        {
            id: '5',
            title: 'Environmentalist Foundation of India',
            icon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ29qBP8Bjn93H_r9OBp5jTyrigtoOtAuVwDlSwz7NyzQ&usqp=CAU&ec=48665699'
        },
        {
            id: '6',
            title: 'Oceana',
            icon:'https://oceana.org/wp-content/uploads/sites/18/logo_en_full.png'

        }
    ]);
    return (
        <View style={styles.Container}>
            <Title titleText={"Organizations"}/>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Organizations working with us</Text>
            </View>
            <View style={styles.bodyContainer}>
                <FlatList
                    data={OrganizationsList}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.item}
                        onPress={()=>navigation.navigate('Info')}
                        >
                            <Image
                                source={{uri: item.icon}}
                                style={styles.imageStyle}
                            />
                            <Text style={styles.itemText}>{item.title}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

export default Organizations

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7F7F7'
    },
    titleContainer:{
        width:'96%',
        height:'8%',
        justifyContent:'center',
        //backgroundColor:'pink'
    },
    titleText:{
        color:'#000',
        fontSize:20,
        fontWeight:'600',
    },
    bodyContainer: {
        height: '82%',
        width: '100%',
        //backgroundColor:'grey',
    },
    item: {
        flexDirection: 'row',
        padding: 20,
        margin: 10,
        borderRadius: 20,
        backgroundColor: '#fff',
    },
    itemText: {
        color: '#000000',
    },
    imageStyle:{
        width:'10%',
        height:'120%',
        resizeMode:'contain',
      },
});