import React from "react";
import { TextInput, View, Button, StyleSheet } from "react-native";

import react from "react";
import api from "./api";
import List from "./list";

class Form extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      newTodo: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  handleChange(value) {
    this.setState({ value: value });
  }
  async submit() {
    if (!this.state.value.trim()) {
      alert("Please enter some text.");
      return;
    }

    var res = await api.createTodo(this.state.value);
    if (res != undefined) {
      this.setState({ value: "", newTodo: res });
    }
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
        <List data={this.state.newTodo}></List>
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
