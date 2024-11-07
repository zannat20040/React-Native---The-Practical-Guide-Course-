import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import GetAllData from "./Component/GetAllData";
import InputData from "./Component/InputData";

export default function App() {
  const [storeInput, setStoreInput] = useState("");
  const [getAllInput, setGetAllInput] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const getInput = (text) => {
    setStoreInput(text);
  };

  const addInput = () => {
    setGetAllInput((prevData) => [
      ...prevData,
      { text: storeInput, id: Math.random() },
    ]);
    setStoreInput("");
    setIsModalVisible(false);
  };

  const handleDelete = (id) => {
    setGetAllInput((item) => item.filter((data) => data.id !== id));
  };

  return (
    <View style={styles.container3}>
      <StatusBar style="inverted" />
      <InputData
          getInput={getInput}
          addInput={addInput}
          storeInput={storeInput}
          setIsModalVisible={setIsModalVisible}
          isModalVisible={isModalVisible}
        />

      <View style={{ flex: 1, marginTop: 10 }}>
        <Button
          title="Show The Input Modal"
          color={'#341C5E'}
          onPress={() => setIsModalVisible(true)}
        />
      </View>
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
  container3: {
    padding: 20,
    marginTop: 10,
    flex: 1,
    paddingBottom: 0,
    // backgroundColor:'black'
  },
  container4: {
    flex: 8,
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
