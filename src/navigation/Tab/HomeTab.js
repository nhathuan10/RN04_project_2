import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Screen from '../../screens';
import { tabName } from '../../configs/navigationConstants';
import { COLORS } from '../../themes';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const BottomTab = createBottomTabNavigator();

const tabBarIcon = ({ route: { name }, size, focused }) => {
    const icons = {
        HomeTab: 'home',
        StreamTab: 'game-controller',
        ProfileTab: 'user',
    };
    const backgroundColor = focused ? COLORS.lightPurple : 'transparent';
    return (
        <View style={{...styles.tabBarIcon, backgroundColor}}>
            <EntypoIcon name={icons[name]} size={size} color={COLORS.white} />
        </View>
    )
};

const screenOptions = ({ route }) => ({
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
        backgroundColor: COLORS.lightBack,
        borderTopColor: COLORS.lightBack
    },
    tabBarIcon: (params) => tabBarIcon({ ...params, route }),
});

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

const styles = StyleSheet.create({
    tabBarIcon: {
        width: 60,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    }
})