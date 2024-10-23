import { useContext, useMemo } from "react";
import ModalWrapper from "./wrapper";
import { ThemeContext } from "../contexts/theme";
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, Platform } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export function newHabitModal(props) {
    const { theme } = useContext(ThemeContext);
    const styles = useMemo(()=>updateStyles(theme), [theme]);
    return (
        <ModalWrapper {...props} style={styles.wrapper}>
            <SafeAreaView style={{flex: 1}}>
                    <Text style={styles.titleText}>Create Group</Text>
                    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
                        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'position' : 'position'}>
                            <Text style={styles.inputHeader}>Group Name</Text>
                            <TextInput style={styles.inputBox} 
                                autoComplete="false" 
                                autoCapitalize="false" 
                                autoCorrect="false"/>
                            <Text style={styles.inputHeader}>Description</Text>
                            <TextInput style={styles.inputBox} 
                                multiline={true}/>
                        </KeyboardAvoidingView>
                    </ScrollView>
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
        backgroundColor: '#dddddd',
    },
    titleText: {
        margin: 10,
        textAlign: 'center',
        fontSize: 32,
        fontFamily: 'AfacadFlux-Bold',
    },
    container: {
        flexGrow: 1,
        margin: 30,
        overflow: 'visible'
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
});