import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.fillerContainer}></View>

        <View style={styles.titleContainer}>
          <Text style={styles.text}>Hello World!</Text>
        </View>
        <View style={styles.fillerContainer}></View>

      <StatusBar style="auto" />
    </View>

 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleContainer: {
    flex: 2,
    backgroundColor: "#38c695",
    borderWidth: 10,
    alignItems: 'center',
    margin: 10,
    justifyContent: "center",
    borderRadius: 20,
  },

  fillerContainer: {
    flex: 1,
    backgroundColor: "#fc6145",
    width: 100,
    height: 100,
  },

  text: {
    color:"red",
    fontSize: 40,
    fontWeight: "bold",
  },

  baseStyle:{
    fontStyle: "italic",
    textAlign:"center",
  }



});
