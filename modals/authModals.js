import React, { useContext, useMemo, useState } from "react";
import ModalWrapper from "./wrapper";
import { Switch, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, TextInput, View, Text } from "react-native";
import { ThemeContext } from "../contexts/theme";
import { TouchableOpacity } from "react-native";

export function AuthModalWrapper(props) {
    return (
        <ModalWrapper {...props} style={props.styles.wrapper} onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={{flex: 1}}>
                <Text style={props.styles.header}>app name</Text>
                <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <View style={props.styles.container}>
                        {props.children}
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </ModalWrapper>
    );
}

export function LoginModal(props) {
    const { theme } = useContext(ThemeContext);
    const styles = useMemo(() => updateStyles(theme), [theme]);

    const [rememberMe, setRememberMe] = useState(false);

    return (
        <AuthModalWrapper {...props} styles={styles}>
            <Text style={styles.subheader}>Login</Text>

            <Text style={styles.inputHeader}>Username or Email</Text>
            <TextInput style={styles.inputBox} 
                autoComplete="false" 
                autoCapitalize="false" 
                autoCorrect="false"/>

            <Text style={styles.inputHeader}>Password</Text>
            <TextInput style={styles.inputBox} 
                autoComplete="false"
                autoCapitalize="false" 
                autoCorrect="false" 
                secureTextEntry="true" />

            <TouchableOpacity style={styles.link}>
                <Text style={styles.linkText}>Forgot your password?</Text>
            </TouchableOpacity>

            <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 20,}}>
                <Switch value={rememberMe} onValueChange={setRememberMe} trackColor={{true : "green" , false : "gray"}}/>
                <Text style={[styles.linkText, {marginHorizontal: 10}]}>Remember Me</Text>
            </View>

            <TouchableOpacity style={styles.submitBtn}>
                <Text style={styles.submitBtnText}>Submit</Text>
            </TouchableOpacity>
        </AuthModalWrapper>
    )
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
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 40,
        paddingRight: 40,
        marginHorizontal: 20,
        marginTop: 80,
    },
    header: {
        fontSize: 42,
        alignSelf: 'center',
        fontFamily: 'AfacadFlux-SemiBold',
        margin: 0,
        letterSpacing: -0.5,
    },
    subheader: {
        fontSize: 32,
        fontFamily: 'AfacadFlux-SemiBold',
        marginBottom: 20,
        letterSpacing: -0.4,
    },
    inputHeader: {
        fontSize: 16,
        fontFamily: 'AfacadFlux-Light',
        marginBottom: 10,
    },
    inputBox: {
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        fontFamily: 'AfacadFlux-Light',
        fontSize: 16,
    },
    link: {
        marginTop: -10
    },
    linkText: {
        fontFamily: 'AfacadFlux-Light',
        fontSize: 14,
    },
    submitBtn: {
        alignSelf: 'center',
        backgroundColor: '#FFB680',
        margin: 20,
        padding: 15,
        width: '90%',
        borderRadius: 10,
    },
    submitBtnText: {
        fontFamily: 'AfacadFlux-SemiBold',
        fontSize: 18,
        textAlign: 'center',
        letterSpacing: 1.4,
    }
})

