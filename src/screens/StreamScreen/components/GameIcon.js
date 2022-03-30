import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function GameIcon({item}) {
    return (
        <TouchableOpacity>
            <Image source={{ uri: item.icon }} style={styles.gameIcon} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    gameIcon: {
        height: 90,
        width: 90,
        borderRadius: 10,
    },
})