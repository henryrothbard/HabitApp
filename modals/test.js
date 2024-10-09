import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import ModalWrapper from './wrapper';

export function TestModal({controller, id}) {
    const [t, st] = useState('hello')
    return (
        <ModalWrapper id={id} controller={controller} style={styles.container} onPress={()=>{st(t + ' and goodbye')}}>
            <Text>{t}</Text>
        </ModalWrapper>
    );
}

export function TestModal2({controller, id}) {
    return (
        <ModalWrapper id={id} controller={controller} style={[styles.container, {height: '20%', backgroundColor: '#f00'}]} onPress={()=>{}}>
            <Text>m1</Text>
        </ModalWrapper>
    );
}
    
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        height: '40%',
        backgroundColor: '#00f',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
    