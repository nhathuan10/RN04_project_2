import { View, StyleSheet, Image, Dimensions, FlatList } from 'react-native'
import React, { Component } from 'react'
import { BackgroundView, Text, Header } from '../../components'
import GameItem from './components/GameItem'
import { stackName } from '../../configs/navigationConstants'
import { connect } from 'react-redux'
import { requestListGame } from '../../redux/thunk/gameActionThunk'

const { height: sHeight, width: sWidth } = Dimensions.get('window')

class HomeScreen extends Component {

    LeftComponent = (
        <View>
            <Text header>
                Hello <Text bold>Nhat Huan</Text>
            </Text>
            <Text>Best games for today</Text>
        </View>
    )

    onPressGameItem = (id) => {
        this.props.navigation.navigate(stackName.detailStack, { id });
    }

    componentDidMount() {
        this.props.dispatch(requestListGame());
        // axios({ method: 'GET', url: 'http://10.0.2.2:3000/games' })
        //     .then(res => {
        //         const listGame = mapLocalHostToIP(res.data);
        //         this.props.setListGame(listGame);
        //     })
        //     .catch(err => console.log(err))
    }

    render() {
        const { listGame } = this.props;
        return (
            <BackgroundView>
                <Header
                    LeftComponent={this.LeftComponent}
                    RightComponent={<Image source={require('../../assets/avatar.jpg')} style={styles.avatar} />}
                />
                <FlatList
                    keyExtractor={(item) => item.id.toString()}
                    data={listGame}
                    renderItem={({ item }) => (
                        <GameItem game={item} onPress={() => this.onPressGameItem(item.id)} />
                    )}
                    ItemSeparatorComponent={() => <View style={{ height: 60 }}></View>}
                    contentContainerStyle={{ paddingBottom: 60 }}
                    showsVerticalScrollIndicator={false}
                />
            </BackgroundView>
        )
    }
}

// const mapDispatchToProps = (dispatch) => ({
//     setListGame: (listGame) => dispatch(setListGame(listGame))
// })

const mapStateToProps = (state) => ({
    listGame: state.gameReducer.listGame,
})

export default connect(mapStateToProps)(HomeScreen);

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#bbb',
    }
})