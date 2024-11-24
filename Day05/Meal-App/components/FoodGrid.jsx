import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FoodGrid({item}) {
  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})