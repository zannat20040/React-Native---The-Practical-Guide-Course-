import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function InputField() {
  return (
    <View style={{ alignItems: "center" }}>
      <View style={styles.inputContainer}>
        <TextInput  style={styles.textField} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#E9EFEC",
    justifyContent: "center",
    width: 100,
  },
  textField: {
    color: "#E9EFEC",
    fontSize: 50,
    height: 80,
  },
});
