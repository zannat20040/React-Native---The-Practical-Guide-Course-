import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartScreen from "./layout/StartScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./layout/GameScreen";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [screen, setScreen] = useState(0);

  let newScreen =
    screen === 0 ? (
      <StartScreen setScreen={setScreen} />
    ) : screen === 1 ? (
      <GameScreen setScreen={setScreen} />
    ) : (
      0
    );

  return (
    <LinearGradient style={styles.background} colors={["#6A9C89", "#16423C"]}>
      {/* <ImageBackground style={[styles.background, {opacity:0.6}]}
         source={require('../Flipping-Game/assets/360_F_853527452_9jdfXrvgmeLEyyaSnxoh1t6tUB8HYJjO.jpg')}
         resizeMethod="cover"
         
      >
      </ImageBackground> */}
      <SafeAreaView>{newScreen}</SafeAreaView>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 10,
    paddingTop: 60,
  },
});
