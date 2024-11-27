import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import recipe from "../data/dummydata";
import AntDesign from "@expo/vector-icons/AntDesign";
import { FavouriteContext } from "../context/FavouriteProvider";

export default function RecipeDetails({ route, navigation }) {
  const name = route.params.name;
  const allfoods = recipe.flatMap((item) => item.foods);
  const details = allfoods.filter((food) => food.name === name)[0];
  const { favouriteRecipe, setFavouriteRecipe } = useContext(FavouriteContext);
  const [isFavourite, setIsFavourite] = useState(false);

  const FavouriteHandler = () => {
    // setIsFavourite(!isFavourite);
    setFavouriteRecipe((current) => [...current, details]);
  };
  console.log(favouriteRecipe.length);

  // Update navigation title
  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
      headerRight: () => (
        <AntDesign
          onPress={FavouriteHandler}
          name={isFavourite ? "star" : "staro"}
          size={24}
          color="black"
          style={{ paddingRight: 10 }}
        />
      ),
    });
  }, [navigation, name, isFavourite]);

  return (
    <View style={styles.container}>
      <Image source={{ uri: details.image }} height={200} />
      <ScrollView style={styles.container1}>
        <View style={{ textAlign: "center" }}>
          {/* title */}
          <Text style={[styles.commontext, styles.title]}>{details.name}</Text>
          {/* desc */}
          <Text style={[styles.commontext, { marginVertical: 6 }]}>
            {details.description}
          </Text>
          {/* time & serve */}
          <View>
            {/* time */}
            <View style={styles.textContainer}>
              <Text style={styles.commontext}>Time: </Text>
              <Text style={styles.commontext}>{details.prepTime}</Text>
            </View>
            {/* serve */}
            <View style={styles.textContainer}>
              <Text style={styles.commontext}>Serve for: </Text>
              <Text style={styles.commontext}>{details.servings}</Text>
            </View>
          </View>
        </View>
        {/* ingredient */}
        <View style={{ marginTop: 6 }}>
          <Text style={styles.ingredientsText}>Ingredients</Text>
          {details?.ingredients?.map((item, index) => (
            <Text key={index} style={styles.commontext}>
              {index + 1}. {item}
            </Text>
          ))}
        </View>
        {/* instruction */}
        <View style={{ marginTop: 6, marginBottom: 40 }}>
          <Text style={styles.ingredientsText}>How to make</Text>
          {details?.instructions?.map((item, index) => (
            <Text key={index} style={styles.commontext}>
              {index + 1}. {item}
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    padding: 20,
    backgroundColor: "#A66E38",
  },
  commontext: {
    color: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginVertical: 10,
  },
  textContainer: {
    maxWidth: "90%",
    flexDirection: "row",
    gap: 3,
  },
  ingredientsText: {
    fontSize: 16,
    color: "white",
    fontWeight: 600,
    marginBottom: 8,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "white",
    padding: 3,
  },
});
