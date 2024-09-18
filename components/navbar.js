import { StyleSheet, View } from 'react-native';
import React, { useMemo } from 'react';

export default function Navbar(props) {
    const sytles = useMemo(() => updateStyles(props.theme), [props.theme]);

    return (
        <View>
        </View>
    );
}

const updateStyles = (theme) => StyleSheet.create({
    container: {
        backgroundColor: 0//colors.MainBack[theme],
    },
})