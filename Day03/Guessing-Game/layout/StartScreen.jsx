import {
  Alert,
  StyleSheet,
  Text,
  View,
  Dimensions,
  useWindowDimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import InputField from "../components/InputField";
import PrimaryBtn from "../components/PrimaryBtn";
import Colors from "../utils/Colos";

export default function StartScreen({ setScreen, getNumber, setGetNumber }) {
  const handleReset = () => {
    setGetNumber(null);
  };

  const handleConfirm = () => {
    const choosenNumber = parseInt(getNumber);
    // console.log("handleConfirm");

    if (isNaN(choosenNumber)) {
      Alert.alert(
        "OHH NOO",
        "Please choose a valid number",
        [{ text: "cancel" }]
        // {
        //   cancelable: true,
        //   onDismiss: () =>
        //     Alert.alert(
        //       'You removed the alert',
        //     ),
        // }
      );
    } else if (choosenNumber < 0 || choosenNumber > 50) {
      Alert.alert(
        "OHH NOO",
        "Please choose a number between 0 to 50",
        [{ text: "cancel" }]
        // {
        //   cancelable: true,
        //   onDismiss: () =>
        //     Alert.alert(
        //       'You removed the alert',
        //     ),
        // }
      );
    } else {
      setScreen(1);
    }
    // console.log(isNaN(chosenNumber))
    // console.log(isNaN(getNumber))
    // console.log(typeof(getNumber))
  };

  const { width, height } = useWindowDimensions();
  const marginBottom = width <= 360 ? 20 : 6;

  return (
    <KeyboardAvoidingView   behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
      <View style={{ width: 400, maxWidth: "90%", margin: "auto" }}>
        <View style={styles.container}>
          <Text
            style={[
              styles.opponentText,
              styles.commonTextStyle,
              { marginBottom: marginBottom },
            ]}
          >
            Enter a Number
          </Text>
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
      </View>
    </KeyboardAvoidingView>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.deepDark,
    justifyContent: "center",
    // paddingVertical: deviceWidth <= 360 ? 15 : 40,
    paddingVertical: 15,
    paddingTop: 40,
    borderRadius: 10,
    // paddingHorizontal: deviceWidth <= 360 ? 25 : 40,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  buttonContainer: {
    gap: 5,
  },
  commonTextStyle: {
    textAlign: "center",
    // marginBottom: 20,
  },
  opponentText: {
    fontSize: 25,
    color: "white",
  },
});
