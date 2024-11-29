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
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavouriteScreen from "./screens/FavouriteScreen";
import FavouriteProvider from "./context/FavouriteProvider";
import { Provider } from "react-redux";
import { store } from "./store";

// Example screen components
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

function FoodStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#FFAD60" },
        headerTintColor: "black",
      }}
    >
      <Stack.Screen name="Home" component={CountryScreen} />
      <Stack.Screen name="Foods" component={FoodScreen} />
      <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
      <Stack.Screen name="Favourite" component={FavouriteScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    // <GestureHandlerRootView style={{ flex: 1 }}>
    //   <StatusBar style="dark" />
    //   <NavigationContainer>
    //     {/* <Stack.Navigator
    //       initialRouteName="Home"
    //       screenOptions={{
    //         headerStyle: { backgroundColor: "#A66E38" },
    //         headerTintColor: "white",
    //       }}
    //     >
    //       <Stack.Screen name="Home" component={CountryScreen} />
    //       <Stack.Screen name="Foods" component={FoodScreen} />
    //       <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
    //     </Stack.Navigator> */}

    //     <Tab.Navigator
    //       screenOptions={{
    //         tabBarStyle: { backgroundColor: "#FFAD60", height: 60 },
    //         tabBarLabelStyle: {
    //           color: "black",
    //           fontSize: 13,
    //         },
    //         tabBarInactiveTintColor: "gray",
    //         headerStyle: { backgroundColor: "#FFAD60" },
    //         headerTintColor: "black",
    //       }}
    //     >
    //       <Tab.Screen
    //         name="Home"
    //         component={CountryScreen}
    //         options={{
    //           title:'Country',
    //           tabBarIcon: ({ focused}) => (
    //             <Ionicons
    //               name={focused ? "home" : "home-outline"}
    //               size={20}
    //               color={'black'}
    //             />
    //           ),
    //         }}
    //       />
    //       <Tab.Screen
    //         name="Foods"
    //         component={FoodScreen}
    //         options={{
    //           tabBarIcon: ({ focused}) => (
    //             <Ionicons
    //               name={focused ? "fast-food" : "fast-food-outline"}
    //               size={20}
    //               color={'black'}
    //             />
    //           ),
    //         }}
    //       />
    //       <Tab.Screen
    //         name="RecipeDetails"
    //         component={RecipeDetails}
    //         options={{
    //           tabBarIcon: ({ focused }) => (
    //             <Ionicons
    //               name={focused ? "paper-plane" : "paper-plane-outline"}
    //               size={20}
    //               color={'black'}
    //             />
    //           ),
    //         }}
    //       />
    //     </Tab.Navigator>

    //     {/* <Drawer.Navigator
    //       screenOptions={{
    //         drawerStyle: {
    //           backgroundColor: "#FFAD60",
    //           width: 250,
    //           borderTopRightRadius: 0,
    //           borderBottomRightRadius: 0,
    //         },
    //         headerStyle: { backgroundColor: "#FFAD60" },
    //         drawerContentStyle: {
    //           paddingTop: 10,
    //         },
    //         drawerLabelStyle: { fontSize: 16 },
    //         drawerActiveTintColor: "white",
    //         drawerInactiveTintColor: "#A66E38",
    //         drawerActiveBackgroundColor: "#A66E38",
    //       }}
    //     >
    //       <Drawer.Screen
    //         name="Home"
    //         component={CountryScreen}
    //         options={{ drawerLabel: "Country" }}
    //       />
    //       <Drawer.Screen name="Foods" component={FoodScreen} />
    //       <Drawer.Screen name="RecipeDetails" component={RecipeDetails} />
    //     </Drawer.Navigator> */}
    //   </NavigationContainer>
    // </GestureHandlerRootView>

    // ===============
    // nested navigation
    // ===============

    <GestureHandlerRootView style={{ flex: 1 }}>
      <FavouriteProvider>
        {/* <Provider store={store}> */}
        <StatusBar style="dark" />
        <NavigationContainer>
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
              headerShown: false,
            }}
          >
            <Tab.Screen
              name="Home"
              component={FoodStack}
              options={{
                title: "Country",
                tabBarIcon: ({ focused }) => (
                  <Ionicons
                    name={focused ? "home" : "home-outline"}
                    size={20}
                    color={"black"}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Favourite"
              component={FavouriteScreen}
              options={{
                headerShown: true,
                tabBarIcon: ({ focused }) => (
                  <Ionicons
                    name={focused ? "fast-food" : "fast-food-outline"}
                    size={20}
                    color={"black"}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
        {/* </Provider> */}
      </FavouriteProvider>
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
