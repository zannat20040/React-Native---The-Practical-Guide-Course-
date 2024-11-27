import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FavouriteListGrid({ item }) {
  return (
    <Pressable style={styles.container}>
      <Image
        style={{ }}
        source={{ uri: item.image }}
        width={120}
      />
      <View style={styles.textContainer}>
        <Text style={{ fontSize: 18, fontWeight: 600 }}>{item.name}</Text>
        <Text style={{ fontSize: 15, marginTop: 5 }}>
          {item.description}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor: "#FFAD60",
    borderRadius: 5,
    shadowColor: "gray",
    elevation: 7,
    overflow:'hidden'
  },
  textContainer: {
    flex: 1,         
    padding: 20,
  },
});
