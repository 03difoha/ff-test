import react from "react";
import api from "./api";
import TodoList from "./todolist";

class TodoForm extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      new_todo: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  async submit(e) {
    if (!this.state.value.trim()) {
      alert("Please enter some text.");
      return;
    }
    var res = await api.create_todo(this.state.value);
    this.setState({ value: "", new_todo: res });
  }
  render() {
    return (
      <div>
        <input value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.submit}>Add new To-do</button>
        <div></div>
        <TodoList data={this.state.new_todo}></TodoList>
      </div>
    );
  }
}

export default TodoForm;
