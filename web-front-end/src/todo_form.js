import react from "react";
import api from "./api";
import Todo_List from "./todo_list";
import TodoList from "./todo_list";

class Todo_Form extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "random text",
      new_todos: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  handleChange(e) {
    console.log("handle change called");
    this.setState({ value: e.target.value });
  }
  async submit(e) {
    console.log("clicked submit");
    var res = await api.create_todo(this.state.value);
    var newest = this.state.new_todos;
    newest.unshift(res);
    this.setState({ new_todos: newest });
  }
  render() {
    return (
      <div>
        <input value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.submit}>Add new To-do</button>
        <div></div>
        <Todo_List data={this.state.new_todos}></Todo_List>
      </div>
    );
  }
}

export default Todo_Form;
