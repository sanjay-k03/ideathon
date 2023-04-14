import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Title from "../title";
import Cleaned from "./cleaned";
import NotCleaned from "./notCleaned";


const Tab = createMaterialTopTabNavigator();


export default function Database() {
    return (
        <View style={styles.container}>
            <Title titleText={'List of Lakes'} />
            <Tab.Navigator
                screenOptions={{
                    tabBarIndicatorStyle: {
                        backgroundColor: '#009DF7',
                        //height: '100%',
                        //width:"40%",
                        //marginLeft:'10%',
                        borderRadius:15,
                    },
                    tabBarIndicatorContainerStyle: {
                        backgroundColor:'#fafafa',
                    },
                    //tabBarActiveTintColor:'#fff',
                    //tabBarInactiveTintColor:'#000',
                    tabBarGap:10,
                    tabBarContentContainerStyle:{
                        justifyContent:'center',
                    }
                }}>
                <Tab.Screen name="Cleaned" component={Cleaned} />
                <Tab.Screen name="Not Cleaned" component={NotCleaned} />
            </Tab.Navigator>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})