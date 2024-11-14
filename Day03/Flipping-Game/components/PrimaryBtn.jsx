import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function PrimaryBtn({ label }) {
  return (
    <Pressable style={styles.customBtn}>
      <Text style={styles.customBtnText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  customBtn: {
    backgroundColor: "#6939B2",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  customBtnText: {
    color: "white",
    fontSize: 18,
  },
});
