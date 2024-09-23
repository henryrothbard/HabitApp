import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { CurrentScreen } from '../contexts/screen';
import Footer from '../components/footer'

export default function Root() {
  return (
    <View style={styles.container}>
      <CurrentScreen />
      <Footer />
      <StatusBar style='dark'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
