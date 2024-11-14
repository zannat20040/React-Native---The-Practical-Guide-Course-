import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import PrimaryBtn from "./components/PrimaryBtn";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ImageBackground source={{uri:'https://cdn.prod.website-files.com/65e793af1050cc9a64a3db55/65eea23dc7531e81680d7073_Flip%20crystals%20animation%20thumbnail.png'}} resizeMode="cover"></ImageBackground> */}
      <View style={styles.buttonContainer}>
        <PrimaryBtn label={'Start'}/>
        <PrimaryBtn label={'Select Level'}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "start",
    marginTop:30
  },
  buttonContainer:{
    flexDirection:'row',
    alignItems:'center',
    gap:10,
    backgroundColor:'#E0CCFF',
     paddingHorizontal:30,
     paddingVertical:50,
     borderRadius:10
  }
});
