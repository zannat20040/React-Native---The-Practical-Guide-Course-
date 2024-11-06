import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    // ---------------- BASIC IS COMPLETE-----------

    // <View style={styles.container}>
    //   <Text style={styles.text}>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    //   <Button title='rative button' />
    //   <Text style={styles.button}>custom button</Text>
    // </View>

    // --------- START LEARN LAYOUT & FLEXBOX -------

    <View style={styles.container2}>
      <StatusBar style='auto' />
      <TextInput placeholder='List your learning' style={styles.input}/>
      <Button title={'Add'}/>
    </View>

  );
}

const styles = StyleSheet.create({
  container2:{
    padding:20,
    marginTop:10,
    flexDirection:'row',
    justifyContent:'space-between',
    gap:5
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'purple',
    fontSize:20,
    padding:10
  },
  button:{
    padding:16,
    borderColor:'green',
    borderWidth:2,
    borderRadius:5,
    marginTop:10
  },
  input:{
    borderWidth:1 ,
    borderRadius:5,
    padding:3,
    paddingLeft:10,
    borderColor:'gray',
    width:'85%'
  }
});
