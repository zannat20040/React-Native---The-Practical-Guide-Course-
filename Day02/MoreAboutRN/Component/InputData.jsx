import {
  Button,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
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
            backgroundColor: "#341C5E",
            padding: 20,
            paddingTop: 50,
            borderRadius: 10,
            gap: 10,
            height: "70%",
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: "https://w7.pngwing.com/pngs/198/278/png-transparent-arrow-and-target-goal-bullseye-computer-icons-business-mission-statement-goal-icon-text-logo-bullseye-thumbnail.png",
            }}
            style={{ width: 100, height: 100, marginBottom: 50 }}
          />

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
