import React from "react";
import { View, Text, Button, StatusBar } from "react-native";
import styles from "../styles";

export default function Details() {

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text>Mewer</Text>
    </View>
  );
}