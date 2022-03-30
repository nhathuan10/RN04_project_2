import { StyleSheet, View, Image, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import Text from '../../components/Text'
import { COLORS } from '../../themes'
import InfoSubContainer from './component/InfoSubContainer'
import TitleContainer from './component/TitleContainer'
import { requestListGame } from '../../redux/thunk/gameActionThunk'
import { useDispatch, useSelector } from 'react-redux'
import GameProfileItem from './component/GameProfileItem'

export default function ProfileScreen() {
    const dispatch = useDispatch();
    const listGame = useSelector(state => state.gameReducer.listGame);

    useEffect(() => {
        dispatch(requestListGame())
    }, [])

    const renderGame = ({ item, index }) => {
        let price = 0, sales = 0;
        if(index == 0){
            price = 36;
            sales = 825;
        }else if(index == 1){
            price = 24;
            sales = 881;
        }else if(index == 2){
            price = 33;
            sales = 737;
        }else{
            price = 16;
            sales = 187;
        }

        return (
            <GameProfileItem item={item} price={price} sales={sales} />
        )
    }
    
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/avatar.jpg')} style={styles.avatar} />
            <Text title bold style={styles.title}>CyberSoft</Text>
            <TitleContainer />
            <InfoSubContainer />
            <Text title subText bold style={{ marginVertical: 10 }}>Purchased Games</Text>
            <FlatList 
                data={listGame}
                renderItem={renderGame}
                ItemSeparatorComponent={() => <View style={{height: 15}}/>}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingVertical: 15}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.lightBack,
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    avatar: {
        height: 90,
        width: 90,
        borderRadius: 50,
        marginTop: 40,
    },
    title: {
        marginVertical: 15,
    },
})