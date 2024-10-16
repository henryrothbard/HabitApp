import React, { useMemo, useContext, useState, useEffect } from "react";
import { BlurView } from "expo-blur";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { ThemeContext } from '../contexts/theme';
import ModalWrapper from "./wrapper";
import { ScrollView } from "react-native-gesture-handler";
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import AddButton from "../components/addButton";

export function HabitMenu(props) {
    const { id, controller, btnPos } = props;

    const { theme } = useContext(ThemeContext)
    const styles = useMemo(() => updateStyles(theme), [theme]);

    const [habits, setHabits] = useState([])

    const rotation = useSharedValue(0);

    useEffect(() => {
        rotation.value = withTiming(45, {duration: 150});
    }, [])

    const btnAnim = useAnimatedStyle(() => { return {
        transform: [
            { translateX: btnPos.x },
            { translateY: -btnPos.y },
            { rotate: rotation.value + 'deg' },
        ]
    }});

    const close = (dur=150) => {
        rotation.value = withTiming(0, {duration: dur}, () => runOnJS(controller.pop)(id));
    }   

    return (
    <ModalWrapper {...props} style={styles.wrapper} onPress={() => close(10)}>
        <BlurView style={styles.container} intensity={5}>
            <ScrollView contentContainerStyle={styles.scroll}>
                <TouchableOpacity>
                    <Text style={[styles.text, styles.newHabitText]}>+ New Habit</Text>
                </TouchableOpacity>
                {habits.map((h, i) => (
                    <TouchableOpacity key={i}>
                        <Text style={styles.text}>{h}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <Animated.View style={[styles.btnContainer, btnAnim]}>
                <AddButton onPress={() => close(150)}/>
            </Animated.View>
        </BlurView>
    </ModalWrapper>
    );
}

const updateStyles = theme => StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
    },
    container: {
        flex: 1,
        backgroundColor: '#c5c5c5d9',
    },
    scroll: {
        flexGrow: 1,
        paddingTop: 200,
        paddingBottom: 100,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    newHabitText: {
        color: '#777'
    },
    text: {
        fontSize: 24,
        textAlign: 'center',
        padding: 14,
    },
    btnContainer: {
        position: 'absolute',
        bottom: 10,
    }
})