import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        const { LeftComponent, RightComponent } = this.props;
        return (
            <View style={styles.headerContainer}>
                <View>
                    {LeftComponent}
                </View>
                <View>
                    {RightComponent}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#bbb',
    }
})