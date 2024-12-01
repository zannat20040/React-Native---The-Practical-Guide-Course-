import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BudgetSet from "./screens/BudgetSet";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExpenseAdd from "./screens/ExpenseAdd";
import ShowAllExpense from "./screens/ShowAllExpense";
import { Colors } from "./globalStyle/globalStyle";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Feather from "@expo/vector-icons/Feather";
import { PaperProvider } from "react-native-paper";

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tabs.Navigator
          screenOptions={{
            tabBarShowLabel: false,
            // tabBarActiveBackgroundColor: Colors.light,
            // tabBarInactiveBackgroundColor: Colors.soft,
            tabBarActiveTintColor: Colors.primary,
            tabBarInactiveTintColor: Colors.secondary,
            tabBarStyle: {
              height: 60,
            },
          }}
        >
          <Tabs.Screen
            name="setbudget"
            component={BudgetSet}
            options={{
              title: "Your Monthly Budget",
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons
                  name="attach-money"
                  size={size}
                  color={color}
                  style={{ paddingTop: 10 }}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="addexpense"
            component={ExpenseAdd}
            options={{
              title: "Add New Expense",
              tabBarIcon: ({ color, size }) => (
                <Feather
                  name="plus"
                  size={size}
                  color={color}
                  style={{ paddingTop: 10 }}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="showexpenses"
            component={ShowAllExpense}
            options={{
              title: "See Your Expenses",
              tabBarIcon: ({ color, size }) => (
                <FontAwesome5
                  name="list"
                  size={size}
                  color={color}
                  style={{ paddingTop: 10 }}
                />
              ),
            }}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
