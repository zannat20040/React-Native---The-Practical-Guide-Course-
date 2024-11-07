import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function InputData({getInput,addInput,storeInput}) {
  return (
    <View style={styles.container2}>
      <TextInput
        placeholder="List your learning"
        style={styles.input}
        onChangeText={getInput}
        value={storeInput}
      />
      <Button title={"Add"} onPress={addInput} />
    </View>
  );
}

const styles = StyleSheet.create({
  container2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
    flex: 1,
    backgroundColor: "white",
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 3,
    paddingLeft: 10,
    borderColor: "gray",
    width: "85%",
  },
});
