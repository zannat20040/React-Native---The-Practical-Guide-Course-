import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import recipe from "../data/dummydata";
import CountryGrid from "../components/CountryGrid";

export default function CountryScreen() {
  const data = recipe;
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={data}
        // style={styles.container}
        keyExtractor={(item) => item.country}
        contentContainerStyle={styles.gridContainer}
        renderItem={(item) => <CountryGrid item={item.item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent:'center',
    width:'100%'
  },

});
