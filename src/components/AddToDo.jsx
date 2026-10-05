import React, { useState } from "react";

const AddTodo = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim() === "") return; // Prevent empty todos
    onAddTodo(inputValue); // Call the function passed from the parent
    setInputValue(""); // Clear the input
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a todo"
      />
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
