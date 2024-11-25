import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import recipe from "../data/dummydata";

export default function RecipeDetails({ route,navigation }) {
  const name = route.params.name;
  const allfoods = recipe.flatMap((item) => item.foods); 
  const details = allfoods.filter((food) => food.name === name)[0];

  // Update navigation title
  useLayoutEffect(() => {
    
    navigation.setOptions({ title: name });
  }, [navigation, name]);


  return (
    <View style={styles.container}>
      <Image source={{ uri: details.image }} height={200} />
      <ScrollView style={styles.container1}>
        <View>
          <Text style={styles.commontext}>{details.name}</Text>
          <Text style={styles.commontext}>{details.description}</Text>
          <Text style={styles.commontext}>{details.prepTime}</Text>
          <Text style={styles.commontext}>{details.servings}</Text>
        </View>
        <View>
          {details?.ingredients?.map((item, index) => (
            <Text key={index} style={styles.commontext}>
              {item}
            </Text>
          ))}
        </View>
        <View>
          {details?.instructions?.map((item, index) => (
            <Text key={index} style={styles.commontext}>
              {item}
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
});
