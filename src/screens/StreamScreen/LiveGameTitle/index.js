import { StyleSheet, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../themes'
import TextTitle from '../../../components/TextTitle'

export default function LiveGameTitle({ title }) {
    return (
        <View style={styles.container} >
            <TextTitle title={title} color={COLORS.lightPurple} margin={{marginRight: 7}}/>
            <TextTitle title='Live' color={COLORS.lightRed}/>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        position: 'absolute',
        top: 10,
        right: 10,
    },
})