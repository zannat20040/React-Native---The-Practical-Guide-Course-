import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function CountryGrid({ item }) {
  console.log(item.country);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.country}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    flex:1,
    padding: 20,
    borderRadius: 10,
    justifyContent:'center',
    margin:5,
    backgroundColor:"#EFAA4B"
  },
  text: {
    textAlign: "center",
    color:'white',
    fontSize:18
  },
});
