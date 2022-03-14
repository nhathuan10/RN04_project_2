import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from 'react-native'
import React, { Component } from 'react'
import HomeTab from "./Tab/HomeTab";
import { stackName } from "../configs/navigationConstants";
import Screen from "../screens";

const Stack = createNativeStackNavigator();

export default class RootNavigation extends Component {
    render() {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name={stackName.homeStack}
                    component={HomeTab}
                />
                <Stack.Screen
                    name={stackName.detailStack}
                    component={Screen.DetailScreen}
                />
            </Stack.Navigator>
        )
    }
}