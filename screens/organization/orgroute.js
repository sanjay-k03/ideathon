import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Organizations from "./organizations";
import Info from "./orginfo";

const Stack = createStackNavigator();

export default function HpRoute() {
    return (
        <Stack.Navigator
            initialRouteName="Organizations"
            screenOptions={{
                headerShown: false,
                animationEnabled: false
            }}
        >
            <Stack.Screen name='Organizations' component={Organizations} />
            <Stack.Screen name="Info" component={Info} />
        </Stack.Navigator>
    );
}