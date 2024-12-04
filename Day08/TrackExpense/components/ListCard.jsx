import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../globalStyle/globalStyle";

export default function ListCard({ renderItem, HandleClick }) {
  return (
    <Pressable
      onPress={() => HandleClick(renderItem.id)}
      android_ripple={{ color: Colors.lightsoft }}
      style={{
        backgroundColor: Colors.secondary,
        marginTop: 10,
        borderRadius: 10,
        padding: 20,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 18, fontWeight: 500 }}>
            {renderItem?.expense}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 20, fontWeight: 500, textAlign: "right" }}>
            ${renderItem?.amount}
          </Text>
        </View>
      </View>
      <Text>{renderItem?.date}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
