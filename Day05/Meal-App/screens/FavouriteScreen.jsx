import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { FavouriteContext } from "../context/FavouriteProvider";
import recipe from "../data/dummydata";
import FavouriteListGrid from "../components/FavouriteListGrid";

export default function FavouriteScreen() {
  const { favouriteRecipe } = useContext(FavouriteContext);

  const allfoods = recipe.flatMap((item) => item.foods);
  const favouriteList = allfoods.filter((food) =>
    favouriteRecipe.includes(food.name)
  );

  return (
    <View style={styles.constainer}>
      {favouriteRecipe.length <= 0 ? (
        <Text style={{ textAlign: "center" }}>
          You don't have anything in favourites yet.
        </Text>
      ) : (
        <FlatList
          data={favouriteList}
          renderItem={({ item }) => <FavouriteListGrid item={item} />}
          keyExtractor={(item) => item.name}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
});
