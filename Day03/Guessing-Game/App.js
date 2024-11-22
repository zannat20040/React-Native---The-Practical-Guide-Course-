import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartScreen from "./layout/StartScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./layout/GameScreen";
import { StatusBar } from "expo-status-bar";
import Colors from "./utils/Colos";
import GameOverScreen from "./layout/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [screen, setScreen] = useState(0);
  const [getNumber, setGetNumber] = useState(null);
  const [countGuess, setCountGuess] = useState(0);

  const [fontsLoaded] = useFonts({
    "roboto-black": require("./assets/Fonts/Roboto-Black.ttf"),
    "roboto-bold": require("./assets/Fonts/Roboto-Bold.ttf"),
    "roboto-light": require("./assets/Fonts/Roboto-Light.ttf"),
    "roboto-medium": require("./assets/Fonts/Roboto-Medium.ttf"),
    "roboto-regular": require("./assets/Fonts/Roboto-Regular.ttf"),
    "roboto-thin": require("./assets/Fonts/Roboto-Thin.ttf"),
  });

 

  let newScreen =
    screen === 0 ? (
      <StartScreen
        setScreen={setScreen}
        setGetNumber={setGetNumber}
        getNumber={getNumber}
      />
    ) : screen === 1 ? (
      <GameScreen
        setScreen={setScreen}
        getNumber={getNumber}
        setCountGuess={setCountGuess}
        setGetNumber={setGetNumber}
      />
    ) : screen === 2 ? (
      <GameOverScreen
        setScreen={setScreen}
        getNumber={getNumber}
        countGuess={countGuess}
        setGetNumber={setGetNumber}
        setCountGuess={setCountGuess}
      />
    ) : null; // Optional: Fallback if no condition matches

  return (
    <LinearGradient
      style={styles.background}
      colors={[Colors.dark, Colors.deepDark]}
    >
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
    fontFamily: "roboto-regular",
    padding: 10,
    paddingTop: 60,
    // alignContent:'center',
    // justifyContent:'center'
  },
});
