import './App.css';
import TodoForm from './todo_form';
import TodoList from './todo_list'
import React, { useState } from 'react';
import api from './api'


function App() {
  // const [todos, setTodos] = useState(null);
  // const fetchData = async () => {
  //       const response = api.get_all_todos
  //       setTodos(response.data) 
  //   };
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-do list</h1>
        <p>Enter a new to do item</p>
        <TodoForm></TodoForm>
        <TodoList></TodoList>
      </header>
    </div>
  );
}

export default App;
