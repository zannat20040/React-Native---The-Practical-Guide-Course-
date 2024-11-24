import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import FoodGrid from "../components/FoodGrid";

export default function FoodScreen({ route }) {
  const foods = route.params.data;
  return (
    <View>
      <FlatList
        data={foods}
        keyExtractor={(item)=>console.log(item.name)}
        // key = {(item)=>console.log(item)}
        renderItem={(item) => <FoodGrid item={item.item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
