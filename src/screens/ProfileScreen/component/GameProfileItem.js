import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../../../themes'
import Text from '../../../components/Text'

export default function GameProfileItem({ item, price, sales }) {
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={{ uri: item.icon }} style={styles.gameIcon} />
            <View style={styles.gameItemContainer}>
                <View style={{ marginHorizontal: 10 }}>
                    <Text bold>{item.title}</Text>
                    <Text subText>{sales} Sales</Text>
                </View>
                <View>
                    <Text bold style={{ color: COLORS.lightPurple }}>$ {price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%', 
        flexDirection: 'row' 
    },
    gameIcon: {
        height: 90,
        width: 90,
        borderRadius: 10,
    },
    gameItemContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        width: '75%', 
        alignItems: 'center'
    },
    liveGame: {
        height: 220,
        width: '100%',
        borderRadius: 10,
    },
})