import React, { useState } from "react";
import { View, Image, StyleSheet, Dimensions, Text } from "react-native";
import * as Progress from 'react-native-progress';
import Title from "../title";


const ScreenWidth = Dimensions.get('screen').width;


function Data({title,load}){
    return(
        <View style={styles.progressBar}>
                    <Text style={styles.txt}>{title}</Text>
                    <Progress.Bar progress={load} width={300} color="#009df7" />
                </View>
    )
}

export default function A() {

    const [loadPercentage, setLoadPercentage] = useState(0.7);

    // setTimeout(()=>{
    //     setLoadPercentage(0.2);
    //     console.log('====================================');
    //     console.log('Done');
    //     console.log('====================================');
    // },3000);

    return (
        <View style={styles.Container}>
            <Title titleText={'1'} />
            <Image source={{ uri: 'https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=600' }} resizeMode='cover' style={styles.image} />
            <View style={styles.progressContainer}>
                <Data title={'Speed'} load={loadPercentage}/>
                <Data title={'Endurance'} load={loadPercentage}/>
                <Data title={'Altitude'} load={loadPercentage}/>
                <Data title={'Power'} load={loadPercentage}/>
                <Data title={'Load'} load={loadPercentage}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    image: {
        height: '30%',
        width: ScreenWidth * 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: '5%',
    },
    progressContainer: {
        width: '95%',
       // backgroundColor: 'grey',
        height: '60%',
    },
    progressBar:{
       // backgroundColor:'pink',
        padding:'3%',
        justifyContent:'center',

    },
    txt:{
        color:'#000',
        fontSize:17,
        padding:'3%',
       // backgroundColor:'yellow',
    }
});
