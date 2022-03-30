import { StyleSheet, View } from 'react-native'
import React from 'react'
import Text from '../../../components/Text'
import { COLORS } from '../../../themes'

export default function LiveGameContainer() {
    return (
        <View style={styles.liveGameContainer}>
            <Text title bold>Live Games</Text>
            <Text style={{ color: COLORS.lightPurple }}>View All</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    liveGameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})