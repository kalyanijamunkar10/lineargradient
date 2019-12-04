/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LinearGradient from 'react-native-linear-gradient';

const App: () => React$Node = () => {
  return (
    <LinearGradient colors={['#38b24f', '#0f76bc']} style={styles.linearGradient}>
  <Text style={styles.buttonText}>
    Hello React-native
  </Text>
</LinearGradient>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  linearGradient: {
   flex: 1,
   paddingLeft: 15,
   paddingRight: 15,
   borderRadius: 5
 },
 buttonText: {
   fontSize: 18,
   fontFamily: 'Gill Sans',
   textAlign: 'center',
   margin: 10,
   color: '#ffffff',
   backgroundColor: 'transparent',
 },
});

export default App;
