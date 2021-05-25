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
    this.setState({ data: response });
  }

  render() {
    return (
      <div className="users">
        {this.state.data.map((todo, index) => (
          <div key={index}>
            <h3>{todo.text}</h3>
            <p>{todo.checked}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Todo_List;
