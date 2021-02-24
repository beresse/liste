import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Liste from './components/Liste'



export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titre} >Voici la terre Dave</Text>
      <Liste></Liste>
      <StatusBar style="auto" />
      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:"center"
  },
  titre:{
    paddingVertical:40,
    fontSize: 25,
    fontWeight:'bold'
  }
});