// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import React, { Component } from 'react';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
export default function Landing({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Delete Post" onPress={() => navigation.navigate("DeletePost")}/>
      <Button title="Report Post" onPress={() => navigation.navigate("Report")}/>
    </View>
  )
}


