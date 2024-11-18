import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export default function InputField() {
  const [getNumber, setGetNumber] = useState("");
  console.log(getNumber);

  return (
    <View style={{ alignItems: "center" }}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textField}
          // editable
          // maxLength={40}
          keyboardType="number-pad"
          onChangeText={(num) => setGetNumber(num)}
          value={getNumber}
        />
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
