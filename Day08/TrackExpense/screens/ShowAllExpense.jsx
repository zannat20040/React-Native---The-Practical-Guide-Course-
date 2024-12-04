import {
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseProvider";
import { Colors, globalCSSStyles } from "../globalStyle/globalStyle";
import ListCard from "../components/ListCard";
import { useNavigation } from "@react-navigation/native";

export default function ShowAllExpense() {
  const navigation = useNavigation();
  const { allExpenses, HandleDelete } = useContext(ExpenseContext);
  const reverseExpenses = [...allExpenses].reverse();

  const HandleClick = (id) => {
    const HandleEdit = (id) => {
      console.log("edited", id);
      navigation.navigate("addexpense", { id: id });
    };
    return Alert.alert(
      "Edit or Delete",
      "Which action do you want to perform?",
      [
        { text: "Cancel" },
        { text: "Edit", onPress: () => HandleEdit(id) },
        { text: "Delete", onPress: () => HandleDelete(id) },
      ]
    );
  };

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
            renderItem={(item) => (
              <ListCard renderItem={item.item} HandleClick={HandleClick} />
            )}
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
