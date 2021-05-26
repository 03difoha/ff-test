import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import api from "./api";
import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native";
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

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

  update(e) {
    api.update_todo(e, document.getElementById(e).checked);
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
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => <Text>{item.id}</Text>}
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
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
export default List;
