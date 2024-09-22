import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Footer from '../components/footer'
import HomeScreen from './home';

export default function Root() {
  const [screen, setScreen] = useState(HomeScreen());
  const [notifs, setNotifs] = useState([]);

  return (
    <View style={styles.container}>
      {screen}
      <Footer />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
