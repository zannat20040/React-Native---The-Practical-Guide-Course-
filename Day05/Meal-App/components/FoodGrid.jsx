import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FoodGrid({ item }) {
  return (
    <View style={styles.container}>
      <Image
        style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
        source={{ uri: item.image }}
        height={200}
      />
      <View style={styles.textContainer}>
        <Text style={{ fontSize: 22, fontWeight: 600 }}>{item.name}</Text>
        <Text style={{ fontSize: 15, marginVertical: 10 }}>
          {item.description}
        </Text>
        <Pressable >
          <Text style={styles.button}>See the recipe</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFAD60",
    borderRadius: 10,
    margin: 5,

    shadowColor: "gray",
    elevation: 7,
  },
  textContainer: {
    padding: 20,
  },
  button:{
    backgroundColor:'black',
    padding:10,
    color:'white',
    borderRadius:10,
    textAlign:'center',
    fontWeight:600
  }
});
