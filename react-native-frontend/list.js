import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import api from "./api";
import Checkbox from "./checkbox";

import { FlatList, SafeAreaView, StyleSheet, Button } from "react-native";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      new_todos: [],
    };
  }

  async componentDidMount() {
    const response = await api.get_all_todos();
    response.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));
    this.setState({ data: response });
  }

  componentDidUpdate(prevProps) {
    if (this.props.data.id !== prevProps.data.id) {
      var updatedList = [this.props.data].concat(this.state.data);
      this.setState({ data: updatedList });
    }
  }

  update(id, checked) {
    const response = api.update_todo(id, !checked);
    if ("updatedAt" in response) {
      for (var i in this.state.data) {
        if (i.id == id) {
          i.checked == !response.checked;
        }
      }
    }
    console.log(this.state.data);
  }

  delete(e) {
    api.delete_todo(e);
    var removedTodo = this.state.data;
    var i = 0;
    while (i < removedTodo.length) {
      if (removedTodo[i].id === e) {
        removedTodo.splice(i, 1);
      } else {
        ++i;
      }
    }
    this.setState({ data: removedTodo });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text style={styles.item}>{item.text}</Text>
              <Checkbox checked={item.checked} id={item.id}></Checkbox>
              <Button onPress={(e) => this.delete(item.id)} title="Delete" />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: "50%",
    marginTop: 100,

    borderColor: "black",
  },
  row: {
    flexDirection: "row",
  },
  item: {
    fontSize: 20,
  },
  title: {
    fontSize: 32,
  },
});
export default List;
