import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import api from "./api";
import Checkbox from "./checkbox";

import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Button,
} from "react-native";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const response = await api.get_all_todos();
    response.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));
    this.setState({ data: response });
  }

  componentDidUpdate(prevProps) {
    // if (this.props.data.id !== prevProps.data.id) {
    //   var updatedList = [this.props.data].concat(this.state.data);
    //   this.setState({ data: updatedList });
    // }
    console.log("updated");
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
      //   <Text>foo</Text>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text style={styles.item}>{item.text}</Text>
              <Checkbox></Checkbox>
              {/* <CheckBox
                checked={item.checked}
                onPress={() => this.setState({ checked: !this.state.checked })}
              /> */}
              <Button onPress={(e) => this.delete(item.id)} title="Delete" />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
      //   <table>
      //     <tbody>
      //       {this.state.data.map((todo, index) => (
      //         <tr key={index}>
      //           <td>{todo.text}</td>
      //           <td>
      //             <input
      //               type="checkbox"
      //               id={todo.id}
      //               defaultChecked={todo.checked}
      //               onClick={(e) => this.update(todo.id)}
      //             ></input>
      //           </td>
      //           <td>
      //             <button onClick={(e) => this.delete(todo.id)}>Delete</button>
      //           </td>
      //         </tr>
      //       ))}
      //     </tbody>
      //   </table>
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
