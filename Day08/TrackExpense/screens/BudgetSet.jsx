import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import {
  Colors,
  globalCSSStyles,
  isValidDate,
} from "../globalStyle/globalStyle";
import { Button, Dialog, Portal, TextInput } from "react-native-paper";
import { ExpenseContext } from "../context/ExpenseProvider";

export default function BudgetSet() {
  const [amount, setAmount] = React.useState("");
  const [date, setDate] = React.useState("");
  const [dialogText, setDialogText] = useState("");
  const [dialogTitle, setDialogTitle] = useState("");
  const [visible, setVisible] = React.useState(false);
  const { HandleBudget } = useContext(ExpenseContext);

  const BudgetHandler = () => {
    setDialogTitle("");
    setDialogText("");
    if (!amount || !date) {
      setVisible(true);
      setDialogTitle("Alert");
      setDialogText("Please fillup all field.");
      return;
    }
    const dateError = isValidDate(date);
    if (dateError) {
      setVisible(true);
      setDialogTitle("Alert");
      setDialogText(dateError);
      return;
    }
    // Convert the input date to a Date object and add one month
    const [day, month, year] = date.split("-").map(Number);
    const startDate = new Date(year, month - 1, day);
    const endDate = new Date(startDate);
    endDate.setMonth(startDate.getMonth() + 1);

    // Format the end date back to "DD-MM-YYYY"
    const formattedEndDate = `${String(endDate.getDate()).padStart(
      2,
      "0"
    )}-${String(endDate.getMonth() + 1).padStart(
      2,
      "0"
    )}-${endDate.getFullYear()}`;

    const budgetDetails = {
      amount,
      startFrom: date,
      willEnd: formattedEndDate,
    };
    HandleBudget(budgetDetails);

    // HandleExpense(expenseDetails);
    setDialogText("Budget added successfully");
    setDialogTitle("Success");
    setVisible(true);
  };

  return (
    <ScrollView style={[globalCSSStyles.container]}>
      <View style={styles.marginTop}>
        <TextInput
          maxLength={6}
          value={amount}
          keyboardType="numeric"
          mode="outlined"
          label="Write Your Budget"
          placeholder="10000"
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
          onPress={BudgetHandler}
        >
          Add this
        </Button>
      </View>

      {/* alert */}
      <View>
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
});
