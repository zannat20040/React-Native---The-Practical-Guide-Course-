import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function GetAllData({ item, index, handleDelete }) {
  return (
    <View style={styles.learning}>
      <Pressable
        android_ripple={{ color: "#341C5E" }}
        onPress={() => handleDelete(item.id)}
      >
        <Text style={{ color: "white", padding: 10 }}>
          {item.text}
          {index}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  learning: {
    backgroundColor: "#774FC2",
    borderRadius: 5,
    marginBottom: 5,
  },
});
