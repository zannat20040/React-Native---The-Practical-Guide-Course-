import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function RecipeDetails({ route }) {
  console.log(route.params.details);
  const details = route.params.details;
  return (
    <View style={styles.container}>
      <Image source={{ uri: details.image }} height={200} />
      <ScrollView style={styles.container1}>
        <View>
          <Text>{details.name}</Text>
          <Text>{details.description}</Text>
          <Text>{details.prepTime}</Text>
          <Text>{details.servings}</Text>
        </View>
        <View>
          {/* <FlatList
            data={details.ingredients}
            renderItem={(item) => <Text>{item.item}</Text>}
          /> */}
          {details.ingredients.map((item,index)=><Text key={index}>{item}</Text>)}
        </View>
        <View>
          {/* <FlatList
            data={details.instructions}
            renderItem={(item) => <Text>{item.item}</Text>}
          /> */}
           {details.instructions.map((item,index)=><Text key={index}>{item}</Text>)}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },container1: {
    padding: 20,
    backgroundColor:'#96CEB4'
  },
});
