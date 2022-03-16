import { Text as RNText, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { COLORS } from '../../themes';

export default class Text extends Component {
    render() {
        const { color = COLORS.white, children, style, header, bold } = this.props;
        return (
            <RNText style={[{color}, header && styles.header,bold && styles.bold, style]}>
                {children}
            </RNText>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
    },
    bold: {
        fontWeight: 'bold',
    },
})