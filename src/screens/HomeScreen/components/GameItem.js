import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { sWidth } from '../../../utils';
import { Text } from '../../../components';


export default class GameItem extends Component {
    render() {
        const { game: { title, subTitle, icon, preview, backgroundColor }, onPress } = this.props;

        const backgroundImage = preview ?  preview[0] : '';  

        return (
            <View style={styles.container}>
                <Image
                    source={{ uri: backgroundImage}}
                    style={styles.imageBackground}
                />
                <TouchableOpacity 
                    style={{ ...styles.bannerContainer, backgroundColor }}
                    onPress={onPress}
                >
                    <Image
                        source={{ uri: icon }}
                        style={styles.imageIcon}
                    />
                    <View style={styles.titleContainer}>
                        <Text bold title>{title}</Text>
                        <Text subText>{subTitle}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        zIndex: 1,
    },
    imageBackground: {
        width: sWidth,
        height: 200
    },
    bannerContainer: {
        position: 'absolute',
        bottom: -40,
        flexDirection: 'row',
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 8,
        width: sWidth - 40,
    },
    imageIcon: {
        width: 80,
        height: 80,
        borderRadius: 8
    },
    titleContainer: {
        width: '75%'
    },
})