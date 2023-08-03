import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RootNavigation} from './src/navigation/RootNavigation';
import 'react-native-gesture-handler';

// :: Screens

export default function App() {
  return <RootNavigation />;
}

const styles = StyleSheet.create({
  appStyle: {
    // backgroundColor: 'red',
    flex: 1,
  },
});
