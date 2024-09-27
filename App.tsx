import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DATA =[
  {
    sname:'Ephraim',
    modulecode:'MAST5112',
  },
  {
    sname:'Musa',
    modulecode:'IMAD5112', 
  },
  {
    sname:'John',
    modulecode:'IMAD5112', 
  }
  ];
  
  type ItemsProps = {sname: string};


  const Item =({sname}:ItemsProps) =>(
    <View>
      <Text>{sname}</Text>
    </View>
  );
export default function App() {

// Variables 
const [ModuleName, setModuleName]= useState('');
const [studentName, setStudentName]= useState('');

  return (
    
    <View style={styles.container}>
      <View>
        <Text style={styles.AppHome}>School App</Text>
      </View>
      <View>
    
<Text style={styles.Textuser}>Student Name</Text>
<TextInput style={styles.formInput} placeholder=''onChangeText={newname=>setStudentName(newname)}/>
<Text style={styles.Textuser}>Module Name</Text>
<TextInput style={styles.formInput} placeholder=''onChangeText={newText=>setModuleName(newText)}/>
<View style={styles.buttonClick}>
<Button   title='Add' onPress={()=>{
  alert(studentName +" "+ ModuleName)}} />
</View>


 </View>
<View style={styles.Listcontainer}>
  <Text style={styles.moduleList}>Students List</Text>
  <SafeAreaView>
  <FlatList data={DATA}
  renderItem={({item}) => <Item sname={item.sname}/>}
  
  />
  </SafeAreaView>
  
  <Text>Total {DATA.length}</Text>
  
</View>
     
    </View>
    
  );
}

const styles = StyleSheet.create({
  AppHome :{
   marginTop:35,
   margin:5,
   
   
  },

  container: {
    flex: 1,
    backgroundColor: '#d6dee2',
    padding:10,
    marginTop:10,
    position:'relative',
    margin:5,
  },
  Listcontainer :{
    position:'relative',
    margin:15
  },
moduleList :{
  fontSize:24,
  fontWeight:'bold',
  margin:4,
},
  welcomepage: {
    color:'red',
    fontSize:20,
  },

formInput:{
 backgroundColor:'grey',
 borderColor:'lightgreen',
 borderRadius:6,
 textAlign:'center',
 fontSize:23,
 
  },
Textuser: {
fontSize:28,
fontWeight:'bold',
margin:5,
marginTop:5,
color:'#77b0cd'

},
buttonClick: {
marginTop:12,
borderRadius:6,
}

});
