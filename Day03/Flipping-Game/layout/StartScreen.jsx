import { StyleSheet, Text, View } from "react-native";
import React from "react";
import InputField from "../components/InputField";
import PrimaryBtn from "../components/PrimaryBtn";
import { StatusBar } from "expo-status-bar";

export default function StartScreen() {
  const handleReset = () => {
    console.log("handleReset");
  };

  const handleConfirm = () => {
    console.log("handleConfirm");
  };
  return (
    <View>
      <View style={styles.container}>
        <InputField />
        <View style={styles.buttonContainer}>
          <PrimaryBtn label={"Confirm"} eventHandler={handleConfirm} />
          <PrimaryBtn label={"Reset"} eventHandler={handleReset} />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#16423C",
    justifyContent: "start",
    margin: 10,
    marginTop: 60,
    paddingVertical: 15,
    paddingTop: 40,
    borderRadius: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  buttonContainer: {
    gap: 5,
  },
});
