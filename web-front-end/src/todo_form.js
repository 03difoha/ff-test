import react from "react";
import api from "./api";
class Todo_Form extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "random text",
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  handleChange(e) {
    console.log("handle change called");
    this.setState({ value: e.target.value });
  }
  submit(e) {
    console.log("clicked submit");
    api.create_todo(this.state.value);
  }
  render() {
    return (
      <div>
        <input value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.submit}>Add new To-do</button>
      </div>
    );
  }
}

export default Todo_Form;
