import React,{ useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import A from './a';
import Title from "../title";

const Stack = createStackNavigator();

function List({ navigation }) {
    const [OrganizationsList, setOrganizationsList] = useState([
        {
            id: '1',
            title: 'Bhumi',
            icon: 'https://cfstatic.give.do/3775b557-fcc0-4b35-8d72-531efb281f15.jpg'
        },
        {
            id: '2',
            title: 'Swades Foundation',
            icon: 'https://cdn.givind.org/static/images/nonprofit/logo/swades-logo.jpg'
        },
        {
            id: '3',
            title: 'WOTR',
            icon: 'https://cfstatic.give.do/a58076fb-dacc-45cc-8939-73374aedbfde.png'
        },
        {
            id: '4',
            title: 'Gramin Vikas Vigyan Samiti',
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ29qBP8Bjn93H_r9OBp5jTyrigtoOtAuVwDlSwz7NyzQ&usqp=CAU&ec=48665699'
        },
        {
            id: '5',
            title: 'Environmentalist Foundation of India',
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ29qBP8Bjn93H_r9OBp5jTyrigtoOtAuVwDlSwz7NyzQ&usqp=CAU&ec=48665699'
        },
        {
            id: '6',
            title: 'Oceana',
            icon: 'https://oceana.org/wp-content/uploads/sites/18/logo_en_full.png'

        }
    ]);
    return (
        <View style={styles.Container}>
            <Title titleText={"Operating Bot"} />
            <View style={styles.bodyContainer}>
                <FlatList
                    data={OrganizationsList}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('A')}>
                            {/* <Image
                                source={{ uri: item.icon }}
                                style={styles.imageStyle}
                            /> */}
                            <Text style={styles.itemText}>{item.id}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

export default function BotOperation() {

    return (
        <Stack.Navigator
         initialRouteName="List"
         screenOptions={{
            headerShown: false,
            animationEnabled: false
         }}
        >
            <Stack.Screen name='List' component={List} />
            <Stack.Screen name="A" component={A} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7F7F7'
    },
    bodyContainer: {
        height: '90%',
        width: '100%',
        //backgroundColor:'#EEEEEE',
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
    imageStyle: {
        width: '10%',
        height: '120%',
        resizeMode: 'contain',
    },
});
