import { StyleSheet, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../themes'
import TextTitle from '../../../components/TextTitle'

export default function LiveGameTitle({ title }) {
    return (
        <View style={styles.container}>
            {/* <Text title bold style={styles.title}>{title}</Text>
            <Text title bold style={styles.status}>Live</Text> */}
            <TextTitle title={title} style={{marginRight: 7}} color={COLORS.lightPurple}/>
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