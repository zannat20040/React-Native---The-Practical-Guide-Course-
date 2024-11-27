import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useContext, useState } from "react";

export const FavouriteContext = createContext();

export default function FavouriteProvider({ children }) {
  const [favouriteRecipe, setFavouriteRecipe] = useState([]);

  const addFavourite = (name) => {
    setFavouriteRecipe((current) => [...current, name]);
  };
  const removeFavourite = (name) => {
    setFavouriteRecipe(favouriteRecipe.filter((item) => item !== name));
  };
  const info = {
    favouriteRecipe,
    setFavouriteRecipe,
    addFavourite,
    removeFavourite,
  };
  return (
    <FavouriteContext.Provider value={info}>
      {children}
    </FavouriteContext.Provider>
  );
}

const styles = StyleSheet.create({});
