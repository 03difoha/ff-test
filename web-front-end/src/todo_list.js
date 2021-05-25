import react from "react";

import api from "./api";
class Todo_List extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: true,
      data: [],
    };
    // this.update = this.update.bind(this);
  }

  async componentDidMount() {
    const response = await api.get_all_todos();
    response.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));
    this.setState({ data: response });
  }

  update(e) {
    api.update_todo(e, document.getElementById(e).checked);
  }

  delete(e) {
    console.log(e);
    api.delete_todo(e);
    document.getElementById(e).parentNode.parentNode.remove();
  }

  render() {
    return (
      <table>
        <tbody>
          {this.props.data.map((todo, index) => (
            <tr class={todo.id} key={index}>
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

          {this.state.data.map((todo, index) => (
            <tr key={index}>
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

export default Todo_List;
