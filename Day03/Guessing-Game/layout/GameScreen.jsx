import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import PrimaryBtn from "../components/PrimaryBtn";
import Colors from "../utils/Colos";
import AttemptScreen from "./AttemptScreen";

// Adjusted getRandomNumber function
const getRandomNumber = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1)) + min; // Inclusive of max and min
};

export default function GameScreen({
  setScreen,
  getNumber,
  setGetNumber,
  setCountGuess,
}) {
  const [minNumber, setMinNumber] = useState(0);
  const [maxNumber, setMaxNumber] = useState(50);
  const [guessNumber, setGuessNumber] = useState(getRandomNumber(50, 0));
  const [hintList, setHintList] = useState([]);

  const GoBackHandler = () => {
    setScreen(0);
    setGetNumber(null);
    setCountGuess(0);
  };

  useEffect(() => {
    if (guessNumber === parseInt(getNumber)) {
      setScreen(2);
    }
  }, [minNumber, maxNumber, guessNumber, getNumber]);

  const hintHandler = (direction) => {
    let newMin = minNumber;
    let newMax = maxNumber;

    if (direction === "higher" && guessNumber < getNumber) {
      newMin = guessNumber + 1;
      setMinNumber(newMin);
      setCountGuess((prevCount) => prevCount + 1);
      setHintList((prev) => [...prev, guessNumber]);
    } else if (direction === "lower" && guessNumber > getNumber) {
      newMax = guessNumber - 1;
      setMaxNumber(newMax);
      setCountGuess((prevCount) => prevCount + 1);
      setHintList((prev) => [...prev, guessNumber]);
    } else {
      Alert.alert("Don't lie!", "Please give the correct hint.");
      return;
    }

    // Update the guess after adjusting the range
    const newGuess = getRandomNumber(newMax, newMin);
    setGuessNumber(newGuess);
  };

  const { width } = useWindowDimensions();
  // const isScrollNeed = width

  return (
    <View style={{height:'100%', backgroundColor:Colors.light,}}>
      <PrimaryBtn label={"Go Back"} eventHandler={GoBackHandler} />
      <View style={styles.container}>
        {/* text */}
        <View>
          <Text style={[styles.opponentText, styles.commonTextStyle]}>
            Opponent Guess
          </Text>
          <Text style={[styles.guessNumber, styles.commonTextStyle]}>
            {guessNumber}
          </Text>
          <Text style={[styles.choosenText, styles.commonTextStyle]}>
            Your choosen number is Higher or Lower?
          </Text>
        </View>
        {/* button */}
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={hintHandler.bind(this, "lower")}
          >
            <Text style={styles.buttonText}>-</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={hintHandler.bind(this, "higher")}
          >
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
      </View>
      <AttemptScreen hintList={hintList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.deepDark,
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 10,
    marginTop: 10,
    // flex: 2,
    flex:1
  },
  commonTextStyle: {
    textAlign: "center",
    marginBottom: 20,
  },
  opponentText: {
    fontSize: 25,
    color: "white",
  },
  choosenText: {
    fontSize: 18,
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
