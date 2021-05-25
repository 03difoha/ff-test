import react from "react";

import api from "./api";
class Todo_List extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: true,
      data: [],
    };
  }

  async componentDidMount() {
    const response = await api.get_all_todos();
    response.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));
    this.setState({ data: response });
    console.log(response);
  }

  render() {
    return (
      // <div className="users">
      //   {this.state.data.map((todo, index) => (

      //     <div key={index}>
      //       <p>{todo.text}</p>
      //       <input
      //         type="checkbox"
      //         id={todo.text}
      //         checked={todo.checked}
      //       ></input>
      //     </div>
      //   ))}
      // </div>
      <table>
        {this.state.data.map((todo, index) => (
          <tr>
            <td>{todo.text}</td>
            <td>
              <input
                type="checkbox"
                id={todo.text}
                checked={todo.checked}
              ></input>
            </td>
          </tr>
        ))}
      </table>
    );
  }
}

export default Todo_List;
