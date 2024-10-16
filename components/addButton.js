import React, { useContext, useMemo, useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { ThemeContext } from '../contexts/theme';
import { Ionicons } from '@expo/vector-icons';
import { ModalContext } from '../contexts/modal';

const size = 64;
const iconSize = 42;

export default function AddButton(props) {
    const { theme } = useContext(ThemeContext);
    const { ModalController } = useContext(ModalContext);
    const styles = useMemo(() => updateStyles(theme), [theme]);

    return (
        <Pressable style={styles.container} 
            onPress={props.onPress}
            onLayout={props.onLayout}
        >
            <Ionicons name='add-outline' size={iconSize} color={'#fff'} />
        </Pressable>
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