import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CountryScreen from "./screens/CountryScreen";

import { NavigationContainer } from "@react-navigation/native"; // Navigation container
import { createStackNavigator } from "@react-navigation/stack"; // Stack navigator
import FoodScreen from "./screens/FoodScreen";
import RecipeDetails from "./screens/RecipeDetails";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";

// Example screen components
// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <NavigationContainer>
        {/* <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: "#A66E38" },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen name="Home" component={CountryScreen} />
          <Stack.Screen name="Foods" component={FoodScreen} />
          <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
        </Stack.Navigator> */}
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: { backgroundColor: "#FFAD60", height: 60 },
            tabBarLabelStyle: {
              color: "black",
              fontSize: 13,
            },
            tabBarInactiveTintColor: "gray",
            headerStyle: { backgroundColor: "#FFAD60" },
            headerTintColor: "black",
          }}
        >
          <Tab.Screen
            name="Home"
            component={CountryScreen}
            options={{
              title:'Country',
              tabBarIcon: ({ focused}) => (
                <Ionicons
                  name={focused ? "home" : "home-outline"}
                  size={20}
                  color={'black'}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Foods"
            component={FoodScreen}
            options={{
              tabBarIcon: ({ focused}) => (
                <Ionicons
                  name={focused ? "fast-food" : "fast-food-outline"}
                  size={20}
                  color={'black'}
                />
              ),
            }}
          />
          <Tab.Screen
            name="RecipeDetails"
            component={RecipeDetails}
            options={{
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  name={focused ? "paper-plane" : "paper-plane-outline"}
                  size={20}
                  color={'black'}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
