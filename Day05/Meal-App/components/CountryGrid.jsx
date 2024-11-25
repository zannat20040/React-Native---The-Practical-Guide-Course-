import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function CountryGrid({ item }) {
  const navigation = useNavigation();

  const HandleCountryFood = (item) => {
    navigation.navigate("Foods", { country: item });
  };

  return (
    <Pressable
      style={styles.container}
      android_ripple={{ color: "FF000020" }}
      onPress={() => HandleCountryFood(item.country)}
    >
       <ImageBackground source={{ uri: item.img }} style={styles.imgBg}>
          <View style={styles.overlay} />
          <Text style={styles.text}>{item.country}</Text>
        </ImageBackground>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    overflow: "hidden",
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
    margin: 5,
    // backgroundColor: "#A66E38",
  },
  imgBg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center", // Ensures the text is centered
    borderRadius:10,
    overflow:'hidden'
  },
  text: {
    position: "absolute", // Position the text on top of everything
    zIndex: 1, // Make sure text appears on top of the overlay
    color: "white",
    fontSize: 18,
    textAlign: "center",
    padding: 20,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    opacity: 0.4,
    zIndex: 0, // Overlay stays below the text
  },
});
