import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../utils/Colos";

export default function AttemptScreen({ hintList }) {
  console.log(hintList);
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={hintList}
        renderItem={({ item, index }) => (
          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>
              {index + 1}. Opponent Guess is {item}
            </Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()} // Use index as a fallback for keyExtractor
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 30,
  },
  textStyle: {
    fontSize: 18,
    color: "white",
  },
  textContainer: {
    backgroundColor: Colors.dark,
    padding: 12,
    borderRadius: 10,
    marginTop: 5,
  },
});
