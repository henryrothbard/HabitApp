import { useContext, useEffect, useMemo, useRef } from "react";
import { ThemeContext } from "../contexts/theme";
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import ModalWrapper from "./wrapper";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const iconSize = 30;

export function NewOccurrenceModal(props) {
    const { theme } = useContext(ThemeContext);
    const styles = useMemo(() => updateStyles(theme), [theme]);

    const inputRef = useRef(null);

    useEffect(()=>{
        if (inputRef.current)
            inputRef.current.focus();
    }, []);

    return (
        <ModalWrapper {...props} style={styles.wrapper} onPress={() => props.controller.pop(props.id)}>
            <SafeAreaView style={{flex: 1}}>
                <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <Text style={styles.titleText}>Habit</Text>
                    <View style={styles.inputContainer}>
                        <TextInput 
                            style={styles.inputBox} 
                            ref={inputRef}
                            multiline={true} />
                        <TouchableOpacity style={styles.sendBtnContainer}>
                            <Ionicons name='arrow-up' size={iconSize} color={'#fff'}/>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </ModalWrapper>
    );
}

const updateStyles = theme => StyleSheet.create({
    wrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#ddddddee',
    },
    titleText: {
        margin: 10,
        textAlign: 'center',
        fontSize: 32,
        fontFamily: 'AfacadFlux-Bold',
    },
    inputContainer: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row',
    },
    inputBox: {
        flexGrow: 1,
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        //borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 20,
        fontSize: 16,
        fontFamily: 'AfacadFlux-Regular',
        backgroundColor: '#ccc'
    },
    sendBtnContainer: {
        borderWidth: 1,
        backgroundColor: '#000',
        borderRadius: 20,
        margin: 10,
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
});