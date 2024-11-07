import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GetAllData from "./component/GetAllData";
import InputData from "./component/InputData";

export default function App() {
  const [storeInput, setStoreInput] = useState("");
  const [getAllInput, setGetAllInput] = useState([]);

  const getInput = (text) => {
    setStoreInput(text);
    // console.log(text);
  };

  const addInput = () => {
    setGetAllInput((prevData) => [
      ...prevData,
      { text: storeInput, id: Math.random() },
    ]);
    setStoreInput('')
  };

  const handleDelete = (id) => {
    console.log("id: ", id);
    setGetAllInput((item) => item.filter((data) => data.id !== id));
  };
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
      <StatusBar style="auto" />
      <InputData getInput={getInput} addInput={addInput} storeInput={storeInput} />
      <View style={styles.divider}></View>

      <View style={styles.container4}>
        <Text style={{ marginBottom: 10 }}>See the List:</Text>
        <FlatList
          data={getAllInput}
          renderItem={({ item = item.item, index = item.index }) => {
            return (
              <GetAllData
                item={item}
                index={index}
                handleDelete={handleDelete}
              />
            );
          }}
          keyExtractor={(item) => item.id}
        ></FlatList>
      </View>
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

  container3: {
    padding: 20,
    marginTop: 10,
    flex: 1,
    paddingBottom: 0,
    // backgroundColor:'black'
  },
  container4: {
    flex: 5,
    paddingVertical: 20,
    paddingBottom: 0,
    // backgroundColor:'gray'
  },

  divider: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    // marginVertical:10
  },
});
