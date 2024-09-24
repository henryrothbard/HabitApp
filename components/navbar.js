import { Pressable, StyleSheet, View } from 'react-native';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { ThemeContext } from '../contexts/theme'
import { Screens, ScreenContext } from '../contexts/screen'

const iconSize = 28;
const selectionSize = 48;
const barHeight = 56;
const padding = (barHeight - selectionSize) / 2;
const selectionDuration = 83;

export default function Navbar() {
    const { theme } = useContext(ThemeContext);
    const styles = useMemo(() => updateStyles(theme), [theme]);

    const { screenId, setScreenId } = useContext(ScreenContext);

    const [layouts, setLayouts] = useState([]);
    const selectionX = useSharedValue(0);
    const selectionScaleX = useSharedValue(1);
    const selectionScaleY = useSharedValue(1);

    useEffect(() => {
        if (!layouts[screenId]) return;

        selectionX.value = withTiming(layouts[screenId], {
            duration: selectionDuration,
            easing: Easing.ease
        });

        selectionScaleX.value = withTiming(1.1, {duration: selectionDuration});
        selectionScaleY.value = withTiming(0.9, {duration: selectionDuration}, () => {
            selectionScaleX.value = withTiming(1, {duration: selectionDuration});
            selectionScaleY.value = withTiming(1, {duration: selectionDuration});
        });

    }, [screenId, layouts]);

    const selectionAnim = useAnimatedStyle(() => { return {
        transform: [
            { translateX: selectionX.value },
            { scaleX: selectionScaleX.value },
            { scaleY: selectionScaleY.value },
        ]
    }});

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.item, styles.selection, selectionAnim]}></Animated.View>
            {Screens.map((screen, i) => (
                <Pressable key={i} style={styles.item} onPress={() => setScreenId(i)} onLayout={(e) => {
                    const x = e.nativeEvent.layout.x;
                    setLayouts((prev) => {
                        const next = [...prev];
                        next[i] = x;
                        return next;
                    });
                }}>
                    <Ionicons name={screen.icon} size={iconSize} color={'#000'} />
                </Pressable>
            ))}
        </View>
    );
}

const updateStyles = (theme) => StyleSheet.create({
    container: {
        backgroundColor: '#D9D9D9',
        borderRadius: 1e7,
        width: '55%',
        height: barHeight,
        padding: padding,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    item: {
        borderRadius: 1e7,
        height: selectionSize,
        width: selectionSize,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selection: {
        position: 'absolute',
        backgroundColor: '#fff',
        bottom: padding,
    },
})