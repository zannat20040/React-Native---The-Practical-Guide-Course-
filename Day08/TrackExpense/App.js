// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import BudgetSet from "./screens/BudgetSet";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExpenseAdd from "./screens/ExpenseAdd";
import ShowAllExpense from "./screens/ShowAllExpense";

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen
          name="setbudget"
          component={BudgetSet}
          options={{ title: "Your Monthly Budget" }}
        />
        <Tabs.Screen
          name="addexpense"
          component={ExpenseAdd}
          options={{ title: "Add New Expense" }}
        />
        <Tabs.Screen
          name="showexpenses"
          component={ShowAllExpense}
          options={{ title: "See Your Expenses" }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
