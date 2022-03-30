import { StyleSheet, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import LiveGameTitle from '../LiveGameTitle'

export default function GameItemStream({item}) {
    return (
        <TouchableOpacity>
            <Image source={{ uri: item.preview[0] }} style={styles.liveGame} />
            <LiveGameTitle title={item.title} margin={{ marginRight: 7 }} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    liveGame: {
        height: 220,
        width: '100%',
        borderRadius: 10,
    },
})