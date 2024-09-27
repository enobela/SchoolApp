import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

// Variables 
const [ModuleName, setModuleName]= useState('');
const [studentName, setStudentName]= useState('');

  return (
    
    <View style={styles.container}>

      <Text style={styles.welcomepage}>Home Page</Text>
      <Text style={styles.welcomepage}>Student Name</Text>
      <TextInput placeholder='Student Name'
      
      onChangeText={newname=>setStudentName(newname)}
      
      />
      <Text style={styles.welcomepage}>Module Name</Text>
      <TextInput placeholder='Module Name'
      
      onChangeText={newText=>setModuleName(newText)}
      
      />
      <Button title='Add' onPress={()=>{
        alert(studentName +" "+ ModuleName)}}/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomepage :{
    color:'red'
  }
});
