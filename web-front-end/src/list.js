import react from "react";

import api from "./api";
class List extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
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

  update(e) {
    api.updateTodos(e, document.getElementById(e).checked);
  }

  delete(e) {
    api.deleteTodos(e);
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
      <table>
        <tbody>
          {this.state.data.map((todo, index) => (
            <tr key={todo.id}>
              <td>{todo.text}</td>
              <td>
                <input
                  type="checkbox"
                  id={todo.id}
                  defaultChecked={todo.checked}
                  onClick={(e) => this.update(todo.id)}
                ></input>
              </td>
              <td>
                <button onClick={(e) => this.delete(todo.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default List;
