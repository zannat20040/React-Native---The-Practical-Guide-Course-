import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PrimaryBtn from "../components/PrimaryBtn";
import Colors from "../utils/Colos";

export default function GameOverScreen({ setScreen, getNumber }) {
  const GoBackHandler = () => {
    setScreen(0);
  };

  return (
    <View>
      <PrimaryBtn label={"Go Back"} eventHandler={GoBackHandler} />
      <View style={styles.container}>
        <View>
          <Text style={[styles.opponentText, styles.commonTextStyle]}>
            Game Over: {getNumber}
          </Text>
        </View>
        {/* <View>
          <Text style={[styles.choosenText, styles.commonTextStyle]}>
            Your guess is {getNumber}
          </Text>
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    backgroundColor: Colors.deepDark,
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  commonTextStyle: {
    textAlign: "center",
    marginBottom: 20,
  },
  opponentText: {
    fontSize: 30,
    color: "white",
    fontWeight: 600,
  },
//   choosenText: {
//     fontSize: 25,
//     color: "white",
//   },
});
