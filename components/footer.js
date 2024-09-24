import React, { useContext, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import { ThemeContext } from '../contexts/theme';

import Navbar from './navbar';
import AddButton from './addButton';

export default function Footer(props) {
    const { theme } = useContext(ThemeContext)
    const sytles = useMemo(() => updateStyles(theme), [theme]);

    return (
        <View style={sytles.container}>
            <Navbar />
            <AddButton />
        </View>
    );
}

const updateStyles = (theme) => StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: '#d9d9d9',
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingBottom: 20,
        paddingTop: 10,
    }
});