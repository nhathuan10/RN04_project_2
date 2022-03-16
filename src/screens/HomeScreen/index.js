import { View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { BackgroundView, Text, Header } from '../../components'

export default class HomeScreen extends Component {
    LeftComponent = (
        <View>
            <Text header>
                Hello <Text bold>Cybersoft</Text>
            </Text>
            <Text>Best games for today</Text>
        </View>
    )
    render() {
        return (
            <BackgroundView>
                <Header
                    LeftComponent={this.LeftComponent}
                    RightComponent={<View style={styles.avatar} />}
                />
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