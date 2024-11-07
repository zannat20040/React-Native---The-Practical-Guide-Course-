import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function InputData({
  getInput,
  addInput,
  storeInput,
  setIsModalVisible,
  isModalVisible,
}) {
  return (
    <Modal animationType="slide" transparent={true} visible={isModalVisible}>
      <View style={styles.container2}>
        <View
          style={{
            backgroundColor: "#4AE0F7",
            padding: 20,
            borderRadius: 10,
            gap: 5,
            height: "30%",
            alignItems: "center",
          }}
        >
          <TextInput
            placeholder="List your learning"
            style={styles.input}
            onChangeText={getInput}
            value={storeInput}
          />
          <View style={styles.buttonContainer}>
            <View style={{ width: 100 }}>
              <Button title={"Add"} onPress={addInput} />
            </View>
            <View style={{ width: 100 }}>
              <Button
                title={"Cancel"}
                onPress={() => setIsModalVisible(false)}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container2: {
    justifyContent: "flex-end",
    gap: 5,
    backgroundColor: "white",
    flex: 1,
    backgroundColor: "transparent",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 5,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 3,
    paddingLeft: 10,
    borderColor: "gray",
    width: "100%",
  },
});
