import { FlatList, Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS } from '../../themes'
import Text from '../../components/Text'
import TextInput from '../../components/TextInput'
import { requestListGame } from '../../redux/thunk/gameActionThunk'
import { useDispatch, useSelector } from 'react-redux'
import LiveGameTitle from './LiveGameTitle'

export default function StreamScreen() {
    const listGame = useSelector(state => state.gameReducer.listGame);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestListGame())
    }, []);

    const renderGameIcon = ({ item }) => {
        return (
            <TouchableOpacity>
                <Image source={{ uri: item.icon }} style={styles.gameIcon} />
            </TouchableOpacity>
        )
    }

    const renderLiveGame = ({ item }) => {
        return (
            <TouchableOpacity>
                <Image source={{ uri: item.preview[0] }} style={styles.liveGame} />
                <LiveGameTitle title={item.title} />
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <Text bold header >Streaming</Text>
            <TextInput />
            <Text subText bold style={styles.subHeader}>Popular Game</Text>
            <FlatList
                horizontal
                ItemSeparatorComponent={() => <View style={{ width: 45 }} />}
                data={listGame}
                renderItem={renderGameIcon}
                style={{ flexGrow: 0 }}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingVertical: 15 }}
            />
            <View style={styles.liveGameContainer}>
                <Text title bold>Live Games</Text>
                <Text style={{ color: COLORS.lightPurple }}>View All</Text>
            </View>
            <FlatList
                data={listGame}
                renderItem={renderLiveGame}
                ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
                showsVerticalScrollIndicator={false}
                style={{ marginTop: 20, flexShrink: 8 }}
                contentContainerStyle={{ paddingVertical: 10 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.lightBack,
        flex: 1,
        paddingTop: 15,
        paddingHorizontal: 15,
    },
    subHeader: {
        marginTop: 25,
    },
    gameIcon: {
        height: 90,
        width: 90,
        borderRadius: 10,
    },
    liveGameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    liveGame: {
        height: 220,
        width: '100%',
        borderRadius: 10,
    },
})