import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import FoodGrid from "../components/FoodGrid";

export default function FoodScreen({ route }) {
  const foods = route.params.data;
  return (
    <View style={styles.container}>
      <FlatList
        data={foods}
        keyExtractor={(item) => console.log(item.name)}
        renderItem={(item) => <FoodGrid item={item.item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
