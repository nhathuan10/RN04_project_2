import { View, StyleSheet, Image, Dimensions } from 'react-native'
import React, { Component } from 'react'
import { BackgroundView, Text, Header } from '../../components'
import axios from 'axios'

const { height: sHeight, width: sWidth } = Dimensions.get('window')

export default class HomeScreen extends Component {
    state = {
        loading: true,
        game: {},
    }

    LeftComponent = (
        <View>
            <Text header>
                Hello <Text bold>Cybersoft</Text>
            </Text>
            <Text>Best games for today</Text>
        </View>
    )

    componentDidMount() {
        axios({ url: 'http://localhost:3000/games', method: 'GET' })
            // .then(res => this.setState({ game: res.data[0], loading: false }))
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }

    render() {
        const {
            game: { title, subTitle, icon, preview, backgroundColor },
            loading,
        } = this.state;
        return (
            <BackgroundView>
                <Header
                    LeftComponent={this.LeftComponent}
                    RightComponent={<View style={styles.avatar} />}
                />
                {!loading && (
                    <View>
                        <Image
                            source={{ uri: preview[0] }}
                            style={{ width: sWidth, height: 200 }}
                        />
                    </View>
                )}
            </BackgroundView>
        )
    }
}

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