import { StyleSheet, TextInput, View } from "react-native";
import Colors from "../utils/Colos";

export default function InputField({ setGetNumber, getNumber }) {
  return (
    <View style={{ alignItems: "center" }}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textField}
          // editable
          // maxLength={40}
          maxLength={2}
          keyboardType="number-pad"
          onChangeText={(num) => setGetNumber(num)}
          value={getNumber}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: Colors.light,
    justifyContent: "center",
    width: 100,
  },
  textField: {
    color: Colors.light,
    fontSize: 50,
    height: 80,
  },
});
