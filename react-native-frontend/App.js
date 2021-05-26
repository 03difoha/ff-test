import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Form from "./form";
import List from "./list";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>To-do List</Text>
      <StatusBar style="auto" />
      <Form></Form>
      {/* <List></List> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,

    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 60,
    textAlign: "center",
  },
});
