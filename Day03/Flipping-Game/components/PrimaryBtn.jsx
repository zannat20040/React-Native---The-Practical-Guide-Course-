import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function PrimaryBtn({ label, eventHandler}) {

  return (
    <Pressable style={[styles.customBtn, styles.shadow]} onPress={eventHandler}>
      <Text style={styles.customBtnText}>{label}</Text>\{" "}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  customBtn: {
    backgroundColor: "#6A9C89",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 150,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },

  customBtnText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});
