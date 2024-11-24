import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import recipe from "../data/dummydata";

export default function CountryScreen() {
  const data = recipe;
  return (
    <View>
      <FlatList
        numColumns="2"
        data={data}
        keyExtractor={(item) => item.country}
        renderItem={(item) => <Text>{item.item.country}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
