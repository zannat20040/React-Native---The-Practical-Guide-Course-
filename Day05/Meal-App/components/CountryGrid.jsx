import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function CountryGrid({ item }) {
  const navigation = useNavigation();

  const HandleCountryFood = (foods) => {
    navigation.navigate("Foods", {data:foods});
  };

  return (
    <Pressable
      style={styles.container}
      android_ripple={{ color: "FF000020" }}
      onPress={() => HandleCountryFood(item.foods)}
    >
      <Text style={styles.text}>{item.country}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    overflow: "hidden",
    flex: 1,
    padding: 20,
    borderRadius: 10,
    justifyContent: "center",
    margin: 5,
    backgroundColor: "#A66E38",
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
  },
});
