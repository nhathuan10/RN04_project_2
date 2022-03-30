import { StyleSheet, View } from 'react-native'
import React from 'react'
import Text from '../Text'

export default function TextTitle({ title, color, style }) {
    return (
        <View style={{ ...styles.container, backgroundColor: color, ...style }}>
            <Text bold title>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        borderRadius: 8,
        borderRadius: 10,
    }
})