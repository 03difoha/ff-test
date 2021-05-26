import React from "react";
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Button,
} from "react-native";

import api from "./api";
import Checkbox from "./checkbox";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      newTodos: [],
    };
  }

  async componentDidMount() {
    const response = await api.getAllTodos();
    response.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));
    this.setState({ data: response });
  }

  componentDidUpdate(prevProps) {
    if (this.props.data.id !== prevProps.data.id) {
      var updatedList = [this.props.data].concat(this.state.data);
      this.setState({ data: updatedList });
    }
  }

  delete(e) {
    api.deleteTodo(e);
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
    borderColor: "black",
    width: 300,
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
    flex: 1,
  },
  item: {
    fontSize: 20,
  },
  title: {
    fontSize: 32,
  },
});
export default List;
