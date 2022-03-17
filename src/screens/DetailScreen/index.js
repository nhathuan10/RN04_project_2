import { TouchableOpacity, Image, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { BackgroundView, Header, Text } from '../../components'
import { COLORS } from '../../themes'
import AntIcon from 'react-native-vector-icons/AntDesign'
import axios from 'axios'
import { sWidth } from '../../utils'
import IconButton from 'react-native-vector-icons/Ionicons'

export default class DetailScreen extends Component {
    state = {
        game: {}
    }
    componentDidMount() {
        axios({ method: 'GET', url: `http://192.168.1.106:3000/games/${this.props.route.params.id}` })
            .then(res => this.setState({ game: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        const { game: { title, subTitle, icon, preview, backgroundColor }, onPress } = this.state;
        const imageBackground = preview ? preview[0] : undefined;
        return (
            <BackgroundView>
                <Image
                    source={{ uri: imageBackground }}
                    style={{ width: sWidth, height: 300 }}
                />
                <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}
                    style={styles.backButton}
                >
                    <AntIcon name='close' color={COLORS.white} size={30} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20, alignItems: 'center' }}>
                    <View style={{ flex: 2 }}>
                        <Image
                            source={{ uri: icon }}
                            style={{ width: 80, height: 80, borderRadius: 8 }}
                        />
                    </View>
                    <View style={{ flex: 4 }}>
                        <Text title bold>{title}</Text>
                        <Text subText>{subTitle}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <IconButton name='cloud-download' size={30} color={COLORS.white} />
                    </View>
                </View>
            </BackgroundView>
        )
    }
}

const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        backgroundColor: COLORS.opacityBlack,
        borderRadius: 20,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 10,
    }
})