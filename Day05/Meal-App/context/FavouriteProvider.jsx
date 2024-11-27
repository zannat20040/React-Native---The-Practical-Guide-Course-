import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useContext, useState } from "react";

export const FavouriteContext = createContext();

export default function FavouriteProvider({ children }) {
  const [favouriteRecipe, setFavouriteRecipe] = useState([]);

  const info = {
    favouriteRecipe,
    setFavouriteRecipe,
  };
  return (
    <FavouriteContext.Provider value={info}>
      {children}
    </FavouriteContext.Provider>
  );
}

const styles = StyleSheet.create({});
