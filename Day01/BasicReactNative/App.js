import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title='rative button' />
      <Text style={styles.button}>custom button</Text>
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
  }
});
