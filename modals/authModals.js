import React, { useContext, useMemo } from "react";
import ModalWrapper from "./wrapper";
import { Keyboard, KeyboardAvoidingView, Platform, Pressable, SafeAreaView, StyleSheet, TextInput, View, Text } from "react-native";
import { ThemeContext } from "../contexts/theme";

export function AuthModal(props) {
    const { theme } = useContext(ThemeContext);
    const styles = useMemo(()=>updateStyles(theme), [theme]);

    return (
        <ModalWrapper {...props} style={styles.wrapper} onPress={Keyboard.dismiss}>
            <SafeAreaView style={{flex: 1}}>
            <KeyboardAvoidingView style={{flex: 1, padding: 20}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <Text style={styles.header}>FEIN</Text>
                {props.children}
            </KeyboardAvoidingView>
            </SafeAreaView>
        </ModalWrapper>
    );
}

// export function SignupModal({}) {
//     return (
//     );
// }

const updateStyles = () => StyleSheet.create({
    wrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#ddd',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 40,
    },
    header: {
        fontSize: 42,
        alignSelf: 'center',
        fontFamily: 'AfacadFlux-SemiBold',
    }
})

