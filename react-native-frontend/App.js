import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Form from "./form";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>To-do List</Text>
      <StatusBar style="auto" />
      <Form></Form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  header: {
    fontSize: 60,
    textAlign: "center",
  },
});
