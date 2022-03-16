import { Text, StyleSheet, View, StatusBar } from 'react-native'
import React, { Component } from 'react'
import { COLORS } from '../../themes'

export default class BackgroundView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='light-content' />
                {this.props.children}
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.lightBack,
        flex: 1,
    }
})