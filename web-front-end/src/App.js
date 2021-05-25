import "./App.css";
import TodoForm from "./todo_form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-do list</h1>
        <p>Enter a new to do item</p>
        <TodoForm></TodoForm>
      </header>
    </div>
  );
}

export default App;
