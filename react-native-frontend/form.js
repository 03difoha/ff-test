import React, { useState } from "react";
import { Text, TextInput, View, Button, StyleSheet } from "react-native";

import react from "react";
import api from "./api";
import List from "./list";

class Form extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      new_todo: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  handleChange(value) {
    this.setState({ value: value });
    console.log(this.state.value);
  }
  async submit() {
    var res = await api.create_todo(this.state.value);
    this.setState({ value: "", new_todo: res });
  }
  render() {
    return (
      <View>
        <TextInput
          value={this.state.value}
          style={styles.input}
          onChangeText={this.handleChange}
        />
        <Button title={"Add new To-do"} onPress={this.submit}></Button>
        <List data={this.state.new_todo}></List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default Form;
