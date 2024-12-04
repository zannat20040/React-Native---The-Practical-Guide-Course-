import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseProvider";
export default function ShowAllExpense() {
  const { allExpenses } = useContext(ExpenseContext);
  console.log(allExpenses);
  return (
    <>
      {allExpenses?.length <= 0 ? (
        <View style={styles.container}>
          <Text style={{ textAlign: "center" }}>
            You didn't expense your money
          </Text>
        </View>
      ) : (
        <View>
          <FlatList data={allExpenses} renderItem={() => <Text>hello</Text>} />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
