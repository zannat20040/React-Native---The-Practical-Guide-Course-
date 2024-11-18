import { ImageBackground, StyleSheet } from "react-native";
import StartScreen from "./layout/StartScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient style={styles.background}  colors={["#6A9C89", "#16423C"]}>
      {/* <ImageBackground style={[styles.background, {opacity:0.6}]}
         source={require('../Flipping-Game/assets/360_F_853527452_9jdfXrvgmeLEyyaSnxoh1t6tUB8HYJjO.jpg')}
         resizeMethod="cover"
         
      >
      </ImageBackground> */}
        <StartScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
