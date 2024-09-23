import React, { useContext, useMemo } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ThemeContext } from '../contexts/theme';
import { Ionicons } from '@expo/vector-icons';

const size = 64;
const iconSize = 36;

export default function AddButton(props) {
    const { theme } = useContext(ThemeContext)
    const sytles = useMemo(() => updateStyles(theme), [theme]);

    return (
        <View style={sytles.container}>
            <Ionicons name='add-outline' size={iconSize} color={'#fff'} />
        </View>
    );
}

const updateStyles = (theme) => StyleSheet.create({
    container: {
        borderRadius: 1e7,
        width: size,
        height: size,
        backgroundColor: '#1f1f1f',
        justifyContent: 'center',
        alignItems: 'center',
    },
});