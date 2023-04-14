import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './homePage';
import Info from "./info";

const Stack = createStackNavigator();

export default function HpRoute() {
    return (
        <Stack.Navigator
            initialRouteName="Homepage"
            screenOptions={{
                headerShown: false,
                animationEnabled: false
            }}
        >
            <Stack.Screen name='Homepage' component={HomePage} />
            <Stack.Screen name="Info" component={Info} />
        </Stack.Navigator>
    );
}