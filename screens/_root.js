import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Navbar from '../components/navbar'
import HomeScreen from './home';

export default function Root() {
  const [screen, setScreen] = useState(HomeScreen());
  return (
    <View style={styles.container}>
      {screen}
      <View style={styles.footer}>
        <Navbar theme='s'/>
        {/*<Addbtn />*/}
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: '#000',
  }
});
