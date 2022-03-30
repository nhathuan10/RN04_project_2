import { FlatList,  StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS } from '../../themes'
import Text from '../../components/Text'
import { requestListGame } from '../../redux/thunk/gameActionThunk'
import { useDispatch, useSelector } from 'react-redux'
import GameItemStream from './components/GameItemStream'
import GameIcon from './components/GameIcon'
import LiveGameContainer from './components/LiveGameContainer'
import TextInput from './components/TextInput'

export default function StreamScreen() {
    const listGame = useSelector(state => state.gameReducer.listGame);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestListGame())
    }, []);

    const renderGameIcon = ({ item }) => {
        return (
            <GameIcon item={item}/>
        )
    }

    const renderLiveGame = ({ item }) => {
        return (
            <GameItemStream item={item}/>
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
            <LiveGameContainer />
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
})