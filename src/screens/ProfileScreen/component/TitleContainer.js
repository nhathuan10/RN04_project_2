import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextTitle from '../../../components/TextTitle'
import { COLORS } from '../../../themes'

export default function TitleContainer() {
    return (
        <View style={styles.titleContainer}>
            <TextTitle title={'Pro Gamer'} color={COLORS.lightPurple} style={{ fontSize: 15 }} margin={{ marginRight: 7 }} />
            <TextTitle title={'Pro Coder'} color={COLORS.lightYellow} style={{ fontSize: 15, color: COLORS.black }} />
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
    },
})