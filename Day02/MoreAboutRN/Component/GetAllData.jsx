import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function GetAllData({ item, index,handleDelete }) {
  return (
    <Pressable android_ripple={{color:'#dddddd'}} onPress={()=>handleDelete(item.id)}>
      <View style={styles.learning} >
        <Text style={{ color: "white" }}>
          {item.text}
          {index}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  learning: {
    backgroundColor: "purple",
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
});
