import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Screen from '../../screens';
import { tabName } from '../../configs/navigationConstants';
import  {COLORS}  from '../../themes';

const BottomTab = createBottomTabNavigator();

const screenOptions = { 
    headerShown: false, 
    tabBarShowLabel: false, 
    tabBarStyle: {backgroundColor: COLORS.lightBack, borderTopColor: COLORS.lightBack}
}

export default class HomeTab extends Component {
    render() {
        return (
            <BottomTab.Navigator screenOptions={screenOptions}>
                <BottomTab.Screen
                    name={tabName.homeTab}
                    component={Screen.HomeScreen}
                />
                <BottomTab.Screen
                    name={tabName.streamTab}
                    component={Screen.StreamScreen}
                />
                <BottomTab.Screen
                    name={tabName.profileTab}
                    component={Screen.ProfileScreen}
                />
            </BottomTab.Navigator>
        )
    }
}