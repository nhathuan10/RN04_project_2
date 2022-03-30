import { StyleSheet, View } from 'react-native'
import React from 'react'
import Text from '../../../components/Text'

export default function InfoSubContainer() {
    return (
        <View style={styles.infoContainer} >
            <View style={[styles.infoSubContainer, { marginRight: 8 }]} >
                <Text header bold style={{marginRight: 3}}>250</Text>
                <Text subText bold style={{ marginBottom: 3 }}>Games</Text>
            </View>
            <View style={styles.infoSubContainer} >
                <Text header bold style={{marginRight: 3}}>4</Text>
                <Text subText bold style={{ marginBottom: 3 }}>Purchases</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    infoContainer: {
        flexDirection: 'row',
        marginVertical: 15,
    },
    infoSubContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    }
})