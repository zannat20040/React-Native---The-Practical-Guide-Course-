import {  ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { Colors, globalCSSStyles, isValidDate } from "../globalStyle/globalStyle";
import { Button, Dialog, Portal, TextInput } from "react-native-paper";
import { ExpenseContext } from "../context/ExpenseProvider";

export default function ExpenseAdd() {
  const [expense, setExpense] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [date, setDate] = React.useState("");
  const [dialogText, setDialogText] = useState("");
  const [dialogTitle, setDialogTitle] = useState("");
  const [visible, setVisible] = React.useState(false);
  const { HandleExpense } = useContext(ExpenseContext);

  // const isValidDate = (dateStr) => {
  //   const dateRegex = /^(\d{2})-(\d{2})-(\d{4})$/;
  //   if (!dateRegex.test(dateStr)) {
  //     return "Invalid date format. Use DD-MM-YYYY.";
  //   }
  //   const [day, month, year] = dateStr.split("-").map(Number);
  //   const dateObj = new Date(year, month - 1, day);
  //   if (
  //     dateObj.getDate() !== day ||
  //     dateObj.getMonth() !== month - 1 ||
  //     dateObj.getFullYear() !== year
  //   ) {
  //     return "Invalid date. Please check the values.";
  //   }
  //   if (dateObj > new Date()) {
  //     return "Date cannot be in the future.";
  //   }
  // };

  const ExpenseAddHandler = () => {
    setDialogTitle("");
    setDialogText("");
    if (!expense || !amount || !date) {
      setVisible(true);
      setDialogTitle("Alert");
      setDialogText("Please fillup all field.");
      return;
    }
    if (expense.length > 50) {
      setVisible(true);
      setDialogTitle("Alert");
      setDialogText("Please write within 50 character.");
      return;
    }
    const dateError = isValidDate(date);
    if (dateError) {
      setVisible(true);
      setDialogTitle("Alert");
      setDialogText(dateError);
      return;
    }

    const expenseDetails = {
      expense,
      amount,
      date,
    };
    HandleExpense(expenseDetails);
    setDialogText("Expense added successfully");
    setDialogTitle("Success");
    setVisible(true);
  };
  return (
    <ScrollView style={[globalCSSStyles.container]}>
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
          Add me
        </Button>
      </View>

      {/* alert */}
      <View>
        {/* <Button onPress={showDialog}>Show Dialog</Button> */}
        <Portal>
          <Dialog visible={visible} onDismiss={() => setVisible(false)}>
            <Dialog.Title>{dialogTitle}</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium">{dialogText}</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => setVisible(false)}>Ok</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  marginTop: {
    marginTop: 10,
  },
  errorText: {
    fontSize: 16,
    color: "red",
  },
});
