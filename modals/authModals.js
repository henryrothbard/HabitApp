import React, { useContext, useMemo, useState } from "react";
import ModalWrapper from "./wrapper";
import { Switch, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, TextInput, View, Text } from "react-native";
import { ThemeContext } from "../contexts/theme";
import { TouchableOpacity } from "react-native";

export function AuthModalWrapper(props) {
    return (
        <ModalWrapper {...props} style={props.styles.wrapper} onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={{flex: 1}}>
                <Text style={props.styles.header}>app</Text>
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

            <TouchableOpacity style={{marginTop: -10}}>
                <Text style={styles.linkText}>Forgot your password?</Text>
            </TouchableOpacity>

            <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 20,}}>
                <Switch value={rememberMe} onValueChange={setRememberMe} trackColor={{true : "green" , false : "gray"}}/>
                <Text style={[styles.linkText, {marginHorizontal: 10}]}>Remember Me</Text>
            </View>

            <TouchableOpacity style={styles.submitBtn}>
                <Text style={styles.submitBtnText}>Submit</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.linkText}>
                    Don't have an account?
                </Text>
                <TouchableOpacity onPress={()=>props.controller.push(SignupModal)}>
                    <Text style={styles.linkText}> Sign up</Text>
                </TouchableOpacity>
            </View>
        </AuthModalWrapper>
    )
}

function SignupEmailPass({styles, setState}) {
    return (
        <View>
            <Text style={styles.inputHeader}>Email</Text>
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
            <Text style={styles.inputHeader}>Re-type Password</Text>
            <TextInput style={styles.inputBox} 
                autoComplete="false"
                autoCapitalize="false" 
                autoCorrect="false" 
                secureTextEntry="true" />
            <TouchableOpacity style={styles.submitBtn} onPress={() => setState(1)}>
                <Text style={styles.submitBtnText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}

function SignupNames({styles, finish}) {
    return (
        <View>
            <Text style={styles.inputHeader}>Username</Text>
            <TextInput style={styles.inputBox} 
                autoComplete="false" 
                autoCapitalize="false" 
                autoCorrect="false"/>
            <Text style={styles.inputHeader}>Display Name</Text>
            <TextInput style={styles.inputBox} 
                autoComplete="false"
                autoCapitalize="false" 
                autoCorrect="false" />
            
            <Text style={[styles.inputHeader, {textAlign: 'center'}]}>Don't worry you can always change these later.</Text>
            <TouchableOpacity style={styles.submitBtn} onPress={finish}>
                <Text style={styles.submitBtnText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}

export function SignupModal(props) {
    const { theme } = useContext(ThemeContext);
    const styles = useMemo(() => updateStyles(theme), [theme]);
    const [signUpState, setSignUpState] = useState(0);

    return (
        <AuthModalWrapper {...props} styles={styles}>
            <Text style={styles.subheader}>Sign Up</Text>
            { signUpState === 0 ? 
                (<SignupEmailPass styles={styles} setState={setSignUpState}/>) : 
                (<SignupNames styles={styles}  finish={() => props.controller.pop(props.id)}/>)
            }
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.linkText}>
                    Already have an account?
                </Text>
                <TouchableOpacity onPress={()=>props.controller.pop(props.id)}>
                    <Text style={styles.linkText}> Sign In</Text>
                </TouchableOpacity>
            </View>
        </AuthModalWrapper>
    );
}

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
        marginTop: 20,
    },
    header: {
        fontSize: 42,
        alignSelf: 'center',
        fontFamily: 'AfacadFlux-SemiBold',
        marginTop: 20,
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
        fontSize: 15,
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

