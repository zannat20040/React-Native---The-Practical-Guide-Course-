import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CountryScreen from "./screens/CountryScreen";

import { NavigationContainer } from "@react-navigation/native"; // Navigation container
import { createStackNavigator } from "@react-navigation/stack"; // Stack navigator
import FoodScreen from "./screens/FoodScreen";
import RecipeDetails from "./screens/RecipeDetails";

// Example screen components
const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={CountryScreen} />
          <Stack.Screen name="Foods" component={FoodScreen} />
          <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
