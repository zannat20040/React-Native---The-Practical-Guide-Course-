# React Native - The Practical Guide [2024]

This README file captures my day-by-day learning journey in the React Native course. Each day, I’ll update my outline with key topics, resources used, personal notes, and reflections on what I learned.

Now, I am going to add my Day 01 learning. Moving forward, I will continue updating this file with the topics I cover each day, reflecting on what I’ve learned.

# Overview

Here’s a short overview of what I learned from my React Native course:

1. **Core Concepts:**

- React fundamentals: `Components`, `Props`, `State`.
- JSX syntax and component-based architecture.

2. **State Management:**

- Managing state with hooks (`useState`, `useEffect`, `useContext`).
- Advanced state management using `Context API`.

3. **UI Design & Styling:**

- Using built-in styling.
- Responsive design principles and `Flexbox` for layout management.

4. **Navigation:**

- Implementing navigation using libraries like `React Navigation`.
- Handling `stack`, `tab`, and `drawer` navigators.

## Day-01, 06 November

- `Introduction` to React Native and its `architecture`
- `Created a new React Native project`, set up the development environment, and `run the first app on a android simulator`.
- Components: `View`, `Text`, `TextInput`, `Pressable`, `Button`
- Styling in React Native using `StyleSheet Object`
- Create Layout in React Native using `flexbox`
- Functions and managing state with `useState`
- Creates `reusable components`.
- Passing data between components using `props`
- Event handling using `onPress`, `onChangeText`
- Mapping data using `map` for dynamic rendering
- Using `FlatList` for rendering large datasets efficiently
- Use of `ScrollView` for scrolling content in vertical and horizontal directions
- `Pressable` for handling touch events with more flexibility
- `Delete` items from a list dynamically.

## Documentation

[Core component](https://reactnative.dev/docs/intro-react-native-components) |
[Fundamentals](https://reactnative.dev/docs/intro-react) |
[TextInput Handle](https://reactnative.dev/docs/handling-text-input) |
[ScrollView](https://reactnative.dev/docs/using-a-scrollview) |
[Use of Flatlist](https://reactnative.dev/docs/using-a-listview) |
[Styling](https://reactnative.dev/docs/style)
) |
[Flex Layout](https://reactnative.dev/docs/flexbox)

## Day-02, 09 November

- `Ripple Effect` used for touch feedback on Android and iOS
- The `android_ripple` prop is used to customize ripple effects on Android.
- Modals can be managed using the `Modal` component.
- Modal Props:

`transparent:` Determines if the modal background is transparent.

`visible:` Controls the visibility of the modal.

`animationType:` Defines the animation type for modal entrance and exit.

- Images can be added using `<Image source={}/>`.
- Use `require('/path/')` to add images stored locally.
- Use `uri('address')` to load images from a live URL.

## Documentation

[Image](https://reactnative.dev/docs/images) |
[Modal](https://reactnative.dev/docs/modal)

## Day-03, 18 November

- Create a custom button using the `Pressable` component:
- Customize shadows using these properties:

```bash
   shadowColor: '#000',
   shadowOpacity: 0.58,
   shadowRadius: 16.0,
   shadowOffset: { width: 0, height: 12 },
   elevation: 2, // Works for Android
```

- Add gradient backgrounds using expo-linear-gradient:

```bash
 <LinearGradient
     colors={['#4c669f', '#3b5998', '#192f6a']}
     style={styles.gradient}
   >
     <Text style={styles.text}>Gradient Background</Text>
   </LinearGradient>
```

- Use `<ImageBackground>` to reate a component with a background image.
- Using `<TextInput>` to Customize TextInput with various properties.
- Displaying Alerts with `Alert.alert()`

```bash
   const [fontsLoaded] = useFonts({
    'CustomFont': require('./assets/fonts/CustomFont.ttf'),
  });
```

- Using `<AppLoading />` for Expo Loading to Handle app loading states.
- Create a gussing game

## Feature of Guessing game

- Prompt the player to enter a guess.
- Validate the input to ensure it is a number and within the specified range.
- Generate a random number within a defined range `(e.g., 1 to 50).`
- If the guess is too low, inform the player using `lower` button
- If the guess is too high, inform the player using `higher` button
- If the guess is correct, congratulate the player and reveal the number.
- Keep a count of the number of attempts made by the player.
- Display the history of previous guesses.
- After a correct guess, allow the player to `Play again`

## Documentation

[Pressable Component](https://reactnative.dev/docs/pressable) |
[Shadow](https://reactnative.dev/docs/shadow-props) |
[LinearGradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/) |
[ImageBackground](https://reactnative.dev/docs/imagebackground) |
[TextInput](https://reactnative.dev/docs/textinput) |
[Alerts](https://reactnative.dev/docs/alert) |
[Custom Fonts](https://docs.expo.dev/develop/user-interface/fonts) |

## Day-04, 22 November

- Use `maxWidth` and `minWidth` properties to create a responsive layout.
- Use the `Dimensions` API to access the device's screen information.

```bash
   const screenHeight = Dimensions.get("window").height;

   // window : Size of the visible Application window.
   // screen : Size of the device's screen.
```

- Use the useWindowDimensions hook to get device screen information dynamically.

```bash
 import { useWindowDimensions } from "react-native";
const { width, height } = useWindowDimensions();
```

- React Native provides three ways to design specifically for Android or iOS

```bash
// Use conditional rendering

const style = Platform.OS === "android" ? androidStyle : iosStyle;
```

```bash
// Use Platform.select

const style = Platform.select({
  ios: iosStyle,
  android: androidStyle,
});

```

```bash
Create platform-specific files using extensions like .android.jsx or .ios.jsx.
```

Example:

`Example.android.jsx`
`Example.ios.jsx`

## Documentation

[Platform](https://reactnative.dev/docs/platform) |
[Hook](https://reactnative.dev/docs/usewindowdimensions) |
[Dimension](https://reactnative.dev/docs/dimensions/)

## Day-05, 24 November

- Install the necessary tools for developing and running React Native apps.

```bash
npm install @react-navigation/native react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons
npm install @react-navigation/stack

```

- Creating Stack Navigator

```bash
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
 return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="CountryList">
       <Stack.Screen name="CountryList" component={CountryList} />
       <Stack.Screen name="FoodList" component={FoodList} />
       <Stack.Screen name="Recipe" component={Recipe} />
     </Stack.Navigator>
   </NavigationContainer>
 );
}

```

- Parameter Passing: Use `navigation.navigate` to send data while navigating:

```bash
navigation.navigate('FoodList', { country: 'Italy' });
```

- Using Hooks:

`useNavigation:` Used to access navigation when props are unavailable.

`useRoute:` Used to fetch route parameters in functional components

```bash
const { country } = route.params;
```

## Documentation

[React Navigation](https://reactnavigation.org/)

## Feature of Recipe app

- Displays a list of countries.
- On selecting a country, shows its famous dishes.
- Clicking on a dish displays its detailed recipe, including ingredients and cooking instructions.

## Day-06, 25 November

- Customizing Stack Header with setOptions

```bash
//dynamically change the header title

navigation.setOptions({ title: `Foods of ${country}` });

```

```bash
//use the screenOptions to apply styles globally or use navigation.setOptions() to dynamically change the header during runtime.

screenOptions={{
 headerStyle: { backgroundColor: "#A66E38" },
 headerTintColor: "white",
}}
```

```bash
//add custom elements (like a button) to the header

navigation.setOptions({
  headerRight: () => <Text>hello</Text>,
});

```

- Tab Navigation Setup

```bash
const Tab = createBottomTabNavigator();

<NavigationContainer>
  <Tab.Navigator>
    <Tab.Screen name="Home" component={CountryScreen} />
    <Tab.Screen name="Foods" component={FoodScreen} />
    <Tab.Screen name="RecipeDetails" component={RecipeDetails} />
  </Tab.Navigator>
</NavigationContainer>

```

Don't forget to wrap it with `GestureHandlerRootView:`

```bash
<GestureHandlerRootView>
  {/* Your navigation code here */}
</GestureHandlerRootView>
```

- Customizing Tab Navigation

```bash
screenOptions={{
  tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
  tabBarStyle: { backgroundColor: 'white', height: 60 },
  tabBarBackground: () => <CustomBackgroundComponent />,
  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "gray",
}}

```

- Drawer Navigation Setup

```bash
const Drawer = createDrawerNavigator();

<Drawer.Navigator>
  <Drawer.Screen name="Home" component={CountryScreen} />
  {/* <Drawer.Screen name="Foods" component={FoodScreen} /> */}
  <Drawer.Screen name="RecipeDetails" component={RecipeDetails} />
</Drawer.Navigator>

```

- Customizing Drawer Navigation

```bash
screenOptions={{
  drawerLabel: "Custom Label",
  drawerInactiveBackgroundColor: "white",
  drawerActiveBackgroundColor: "rgba(255, 99, 71, 0.2)",
  drawerInactiveTintColor: "gray",
  drawerActiveTintColor: "tomato",
  drawerLabelStyle: { fontSize: 16, fontWeight: "bold" },
  drawerContentStyle: { paddingTop: 20 },
  drawerStyle: {
    backgroundColor: "#FFAD60",
    width: 250,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  headerShown: false,
}}
```

## Documentation

[Drawer Navigation](https://reactnavigation.org/docs/drawer-navigator) | [Stack Navigation](https://reactnavigation.org/docs/native-stack-navigator) | [Tab Navigation](https://reactnavigation.org/docs/bottom-tab-navigator)

## Modify the Recipe App

- Recipe Details Page Redesign
- Nested Navigation using Bottom Tab & Stack

## Day-07, 27 November

- Use react `Context API` for globalLy state manage

- Creating a Context

```bash
const FavouriteContext = createContext();

```

- Providing Context:

```bash
 const info = {
   favouriteRecipe,
   setFavouriteRecipe,
   addFavourite,
   removeFavourite,
 };

<FavouriteContext.Provider value={info}>
     {children}
   </FavouriteContext.Provider>
```

- Wrap the `App` by the `Provider`

```bash
 <FavouriteProvider>
    <component />
<\FavouriteProvider>
```

- Consuming Context:

```bash
const { favouriteRecipe } = useContext(FavouriteContext);
```

## Documentation

[Context API](https://react.dev/reference/react/createContext)

## Modify the Recipe App

- Use `Context API` for globally state manage to `handle the favourite recipe list`.
