import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseProvider";
import { Avatar, Card, IconButton } from "react-native-paper";
import { Colors, globalCSSStyles } from "../globalStyle/globalStyle";

export const ListCard = (item) => {
  const renderItem = item.item;
  const HandleClick = () => {
    console.log("pressed");
  };

  return (
    <Pressable
      onPress={HandleClick}
      android_ripple={{ color: Colors.lightsoft }}
      style={{
        backgroundColor: Colors.secondary,
        marginTop: 10,
        borderRadius: 10,
        padding: 20,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 18, fontWeight: 500 }}>
            {renderItem?.expense}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 20, fontWeight: 500, textAlign: "right" }}>
            ${renderItem?.amount}
          </Text>
        </View>
      </View>
      <Text>{renderItem?.date}</Text>
    </Pressable>
  );
};
export default function ShowAllExpense() {
  const { allExpenses } = useContext(ExpenseContext);
  const reverseExpenses = [...allExpenses].reverse();

  return (
    <View style={globalCSSStyles.container}>
      {allExpenses?.length <= 0 ? (
        <View style={styles.container}>
          <Text style={{ textAlign: "center" }}>
            You didn't expense your money
          </Text>
        </View>
      ) : (
        <View>
          <FlatList
            data={reverseExpenses}
            renderItem={(item) => <ListCard item={item.item} />}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
