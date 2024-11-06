import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

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

    <View style={styles.container3}>
      <View style={styles.container2}>
        <StatusBar style="auto" />
        <TextInput placeholder="List your learning" style={styles.input} />
        <Button title={"Add"} />
      </View>
      <View style={styles.divider}></View>
      <Text style={styles.container4}>See the List:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // BASIC

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "purple",
    fontSize: 20,
    padding: 10,
  },
  button: {
    padding: 16,
    borderColor: "green",
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 10,
  },

  // LAYOUT & FLEXBOX

  container2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
    flex:1,
    backgroundColor:"white"
  },
  container3: {
    padding: 20,
    marginTop: 10,
    height:610,
    // backgroundColor:'black'
  },
  container4:{
    flex:5,
    paddingVertical:20
    // backgroundColor:'gray'
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 3,
    paddingLeft: 10,
    borderColor: "gray",
    width: "85%",
  },
  divider: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    // marginVertical:10 
  },
});
