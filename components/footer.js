import React, { useContext, useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { ThemeContext } from '../contexts/theme';

import Navbar from './navbar';
import AddButton from './addButton';
import { ModalContext } from '../contexts/modal';
import { HabitMenu } from '../modals/habitMenu';
import { ScreenContext, Screens } from '../contexts/screen';

export default function Footer(props) {
    const { theme } = useContext(ThemeContext);
    const { ModalController } = useContext(ModalContext);
    const { screenId } = useContext(ScreenContext);
    const sytles = useMemo(() => updateStyles(theme), [theme]);

    const [btnLayout, setBtnLayout] = useState();

    return (
        <View style={sytles.container}>
            <Navbar />
            <AddButton 
                onPress={
                    () => {
                        if (screenId === 1) return;
                        ModalController.push(p=>(<HabitMenu {...p} btnPos={btnLayout}/>))
                    }
                } 
                onLayout={
                    (e) => setBtnLayout(e.nativeEvent.layout)
                }
            />
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