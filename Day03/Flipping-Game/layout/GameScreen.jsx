import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PrimaryBtn from "../components/PrimaryBtn";

export default function GameScreen({ setScreen }) {
  const GoBackHandler = () => {
    setScreen(0);
  };
  return (
    <View>
      <Text>GameScreen</Text>
      <PrimaryBtn label={"Go Back"} eventHandler={GoBackHandler}/>
    </View>
  );
}

const styles = StyleSheet.create({});
