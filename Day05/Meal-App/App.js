import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CountryScreen from "./screens/CountryScreen";

import { NavigationContainer } from "@react-navigation/native"; // Navigation container
import { createStackNavigator } from "@react-navigation/stack"; // Stack navigator
import FoodScreen from "./screens/FoodScreen";
import RecipeDetails from "./screens/RecipeDetails";
import AntDesign from '@expo/vector-icons/AntDesign';
// Example screen components
const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: "#A66E38" },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen name="Home" component={CountryScreen} />
          <Stack.Screen name="Foods" component={FoodScreen} />
          <Stack.Screen
            name="RecipeDetails"
            options={{
              headerRight: () => (
                <AntDesign name="staro" size={24} color="black" style={{paddingRight:10, color:'white'}}/>
              ),
            }}
            component={RecipeDetails}
          />
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
