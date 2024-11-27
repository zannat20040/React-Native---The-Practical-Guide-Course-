import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { FavouriteContext } from "../context/FavouriteProvider";

export default function FavouriteScreen() {
  const { favouriteRecipe } = useContext(FavouriteContext);
  console.log(favouriteRecipe);

  return (
    <View style={styles.constainer}>
      {favouriteRecipe.length <= 0 ? (
        <Text style={{ textAlign: "center" }}>
          You don't have anything in favourites yet.
        </Text>
      ) : (
        <View>
          <Text>fovourite</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
});
