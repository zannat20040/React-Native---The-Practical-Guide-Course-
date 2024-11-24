import {
  FlatList,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import recipe from "../data/dummydata";
import CountryGrid from "../components/CountryGrid";

export default function CountryScreen() {
  const data = recipe;
  const { width, height } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={width > height ? 3 : 2}
        data={data}
        keyExtractor={(item) => item.country}
        renderItem={(item) => <CountryGrid item={item.item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
});
