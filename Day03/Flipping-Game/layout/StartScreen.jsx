import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import InputField from "../components/InputField";
import PrimaryBtn from "../components/PrimaryBtn";
import { StatusBar } from "expo-status-bar";

export default function StartScreen({setScreen}) {
  const [getNumber, setGetNumber] = useState(null);

  const handleReset = () => {
    console.log("handleReset");
    setGetNumber(null)
  };

  const handleConfirm = () => {
    const choosenNumber = parseInt(getNumber)
    // console.log("handleConfirm");

    if(isNaN(choosenNumber)){
      Alert.alert(
        'OHH NOO',
        'Please choose a valid number',
        [
          {text:'cancel'},
        ]
      )
    }
    if(choosenNumber<0 || choosenNumber >50){
      Alert.alert(
        'OHH NOO',
        'Please choose a number between 0 to 50',
        [
          {text:'cancel'},
        ]
      )
    }

    console.log(`You have given a valid number ${choosenNumber}`)
    setScreen(1)
    // console.log(isNaN(chosenNumber))
    // console.log(isNaN(getNumber))
    // console.log(typeof(getNumber))

  };
  return (
    <View>
      <View style={styles.container}>
        <InputField setGetNumber={setGetNumber} getNumber={getNumber} />
        <View style={styles.buttonContainer}>
          <PrimaryBtn
            label={"Confirm"}
            eventHandler={handleConfirm}
            getNumber={getNumber}
          />
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
