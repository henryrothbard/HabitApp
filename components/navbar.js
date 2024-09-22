import { StyleSheet, View, SafeAreaView } from 'react-native';
import React, { useContext, useMemo, useState } from 'react';

import { ThemeContext } from '../contexts/theme'

export default function Navbar(props) {
    const { theme } = useContext(ThemeContext)
    const sytles = useMemo(() => updateStyles(theme), [theme]);
    
    const [screenId, setScreenId] = useState(props.defaultState);

    return (
        <View style={sytles.container}>
        </View>
    );
}

const updateStyles = (theme) => StyleSheet.create({
    container: {
        backgroundColor: '#D9D9D9',
        borderRadius: 1e7,
        width: '55%',
        height: 64,
    },
})