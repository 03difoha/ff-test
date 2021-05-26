import react from "react";
import api from "./api";
import List from "./list";

class Form extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      newTodo: [],
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
    var res = await api.createTodos(this.state.value);
    this.setState({ value: "", newTodo: res });
  }
  render() {
    return (
      <div>
        <input value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.submit}>Add new To-do</button>
        <div></div>
        <List data={this.state.newTodo}></List>
      </div>
    );
  }
}

export default Form;
