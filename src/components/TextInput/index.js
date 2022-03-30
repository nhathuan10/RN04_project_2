import { StyleSheet, View, TextInput as RNTextInput } from 'react-native'
import React from 'react'
import { COLORS } from '../../themes'
import SearchIcon from 'react-native-vector-icons/FontAwesome5'

export default function TextInput() {
    return (
        <View style={styles.container}>
            <RNTextInput style={styles.input} />
            <SearchIcon
                name='search'
                size={25}
                style={styles.icon}
                color={COLORS.opacityWhite}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    input: {
        backgroundColor: COLORS.darkGray,
        borderRadius: 20,
        color: COLORS.white,
        paddingHorizontal: 12,
        width: '95%',
        marginTop: 17,
        fontSize: 18,
    },
    icon: {
        position: 'absolute',
        top: 30,
        right: 35,
    },
})