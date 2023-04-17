import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './homePage';
import Info from "./info";
import CreateHotspot from './createHotspot';
import Profile from "./profile";
import Fund from "./fund";
import Report from "./report";
import Help from "./help";

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
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="CreateHotspot" component={CreateHotspot} />
            <Stack.Screen name="Fund" component={Fund} />
            <Stack.Screen name="Report" component={Report} />
            <Stack.Screen name="Help" component={Help} />
        </Stack.Navigator>
    );
}