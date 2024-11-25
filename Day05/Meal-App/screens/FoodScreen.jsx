import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import FoodGrid from "../components/FoodGrid";
import recipe from "../data/dummydata";

export default function FoodScreen({ route, navigation }) {
  const country = route.params.country;
  navigation.setOptions({title:`Foods of ${country}`})

  const foods = recipe.find((item) => item.country === country).foods;

  return (
    <View style={styles.container}>
      <FlatList
        data={foods}
        keyExtractor={(item) => item.name}
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
