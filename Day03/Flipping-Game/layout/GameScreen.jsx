import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import PrimaryBtn from "../components/PrimaryBtn";
import Colors from "../utils/Colos";
import Icon from "react-native-vector-icons/FontAwesome";

export default function GameScreen({ setScreen }) {
  const GoBackHandler = () => {
    setScreen(0);
  };

  const getRandomNumber = (max, min) => {
    const randomNumber = Math.floor(Math.random() * (max - min));
    console.log("random==>", randomNumber);
    return randomNumber;
  };

  // getRandomNumber(50,0);
  const guessNumber = getRandomNumber(50, 0);

  return (
    <View>
      {/* <Text>GameScreen</Text> */}
      <PrimaryBtn label={"Go Back"} eventHandler={GoBackHandler} />
      <View style={styles.container}>
        <View>
          <Text style={[styles.opponentText, styles.commonTextStyle]}>
            Opponent Guess
          </Text>
          <Text style={[styles.guessNumber, styles.commonTextStyle]}>
            {guessNumber}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.deepDark,
    justifyContent: "start",
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  commonTextStyle: {
    textAlign: "center",
    marginBottom: 20,
  },
  opponentText: {
    fontSize: 25,
    color: "white",
  },
  guessNumber: {
    fontSize: 40,
    color: Colors.normal,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignContent: "center",
  },
  button: {
    backgroundColor: Colors.normal,
    padding: 10,
    width: 60,
    borderRadius: 150,
  },
  buttonText: {
    fontSize: 30,
    color: Colors.deepDark,
    textAlign: "center",
  },
});
