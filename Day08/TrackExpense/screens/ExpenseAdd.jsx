import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Colors, globalCSSStyles } from "../globalStyle/globalStyle";
import { Button, TextInput } from "react-native-paper";

export default function ExpenseAdd() {
  const [expense, setExpense] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [date, setDate] = React.useState("");
  const [error, setError] = useState("");
  const ExpenseAddHandler = () => {
    setError("");
    if (!expense || !amount || !date) {
      setError("Please fillup all field.");
    }
    if (expense.length > 50) {
      setError("Please write within 50 character.");
    }
  };
  return (
    <View style={[globalCSSStyles.container]}>
      <View>
        <TextInput
          value={expense}
          mode="outlined"
          keyboardType="default"
          label="Write your expense"
          placeholder="Buy a coffee"
          right={<TextInput.Affix text="/50" />}
          onChangeText={(value) => setExpense(value)}
        />
      </View>
      <View style={styles.marginTop}>
        <TextInput
          maxLength={6}
          value={amount}
          keyboardType="numeric"
          mode="outlined"
          label="Write Expense Amount"
          placeholder="100"
          onChangeText={(value) => setAmount(value)}
        />
      </View>
      <View style={styles.marginTop}>
        <TextInput
          value={date}
          keyboardType="default"
          mode="outlined"
          label="Write Date"
          placeholder="DD-MM-YYYY"
          onChangeText={(value) => setDate(value)}
        />
      </View>
      <View style={styles.marginTop}>
        <Button
          buttonColor={Colors.primary}
          mode="contained"
          onPress={ExpenseAddHandler}
        >
          Press me
        </Button>
      </View>
      <View>
        <Text>{error}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  marginTop: {
    marginTop: 10,
  },
});
