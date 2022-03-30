import { TouchableOpacity, Image, StyleSheet, View, FlatList } from 'react-native'
import React, { Component } from 'react'
import { BackgroundView, Header, Text } from '../../components'
import { COLORS } from '../../themes'
import AntIcon from 'react-native-vector-icons/AntDesign'
import axios from 'axios'
import { mapLocalHostToIP, sWidth } from '../../utils'
import IconButton from 'react-native-vector-icons/Ionicons'
import IonicIcon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import { setGameDetail } from '../../redux/actions/gameAction'
import { requestDetailGame } from '../../redux/thunk/gameActionThunk'

class DetailScreen extends Component {
    renderRating = () => {
        const { game: { rating } } = this.props;
        const listStar = [];
        for (let i = 0; i < Math.floor(rating); i++) {
            listStar.push(
                <IonicIcon key={i} name='ios-star-sharp' size={16} color={COLORS.lightPurple} />
            )
        }
        if (5 - rating > 0.5) {
            listStar.push(
                <IonicIcon key={6} name='ios-star-half-sharp' size={16} color={COLORS.lightPurple} />
            )
        } else {
            listStar.push(
                <IonicIcon key={6} name='ios-star-sharp' size={16} color={COLORS.lightPurple} />
            )
        }
        listStar.push(
            <Text style={{ marginLeft: 10 }}>{rating}</Text>
        )
        return listStar;
    }

    componentDidMount() {
        this.props.dispatch(requestDetailGame(this.props.route.params.id));
    }

    render() {
        const { game: { title, subTitle, icon, preview, age, description }} = this.props;
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
                <View style={styles.infoContent}>
                    <View style={{ flex: 2 }}>
                        <Image
                            source={{ uri: icon }}
                            style={styles.iconGame}
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
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: 20,
                        alignItems: 'center'
                    }}
                >
                    <View
                        style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
                    >
                        {this.renderRating()}
                    </View>
                    <View>
                        <Text>{age}</Text>
                    </View>
                    <View>
                        <Text>Game of the day</Text>
                    </View>
                </View>
                <FlatList
                    //keyExtractor={(item) => item.key.toString()}
                    style={{ flexGrow: 0, marginTop: 10 }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    decelerationRate={'fast'}
                    snapToInterval={350}
                    data={preview}
                    renderItem={({ item }) => <Image source={{ uri: item }} style={{ height: 200, width: 350, borderRadius: 8 }} />}
                    ItemSeparatorComponent={() => <View style={{ width: 30 }}></View>}
                    contentContainerStyle={{paddingHorizontal: 20}}
                />
                <View style={{paddingHorizontal: 20}}>
                    <Text>{description}</Text>
                </View>
            </BackgroundView>
        )
    }
}

const mapStateToProps = (state) => ({
    game: state.gameReducer.game,
})

// const mapDispatchToProps = (dispatch) => ({
//     setGameDetail: (game) => dispatch(setGameDetail(game))
// })

export default connect(mapStateToProps)(DetailScreen);

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
    },
    infoContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        alignItems: 'center'
    },
    iconGame: {
        width: 80,
        height: 80,
        borderRadius: 8
    }
})