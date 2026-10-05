import React, { useState } from "react";
import AddTodo from "./components/AddToDo";
import TodoList from "./components/ToDoList";

const App = () => {
  const [todos, setTodos] = useState([]); // Shared state for todos

  const addTodo = (todo) => {
    setTodos([...todos, todo]); // Add a new todo to the list
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo onAddTodo={addTodo} /> {/* Pass the state updater to AddTodo */}
      <TodoList todos={todos} /> {/* Pass the shared state to TodoList */}
    </div>
  );
};

export default App;
