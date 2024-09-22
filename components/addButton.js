import React, { useContext, useMemo } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ThemeContext } from '../contexts/theme';

export default function AddButton(props) {
    const { theme } = useContext(ThemeContext)
    const sytles = useMemo(() => updateStyles(theme), [theme]);

    return (
        <View style={sytles.container}>
        </View>
    );
}

const updateStyles = (theme) => StyleSheet.create({
    container: {
        borderRadius: 1e7,
        width: 80,
        height: 80,
        backgroundColor: '#1f1f1f'
    }
});