// Example code in your frontend component
import React, { useEffect, useState } from "react";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch("http://localhost:5001/"); // Replace with your backend URL
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSaveTodo = async (text) => {
    try {
      const response = await fetch("http://localhost:5001/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });
      const data = await response.json();
      console.log("Saved todo:", data);
      fetchTodos();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      const response = await fetch("http://localhost:5001/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: id }),
      });
      const data = await response.text();
      console.log(data);
      fetchTodos();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateTodo = async (id, newText) => {
    try {
      const response = await fetch("http://localhost:5001/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: id, text: newText }),
      });
      const data = await response.text();
      console.log(data);
      fetchTodos();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            {todo.text} {todo.timestamp}
            <button onClick={() => handleDeleteTodo(todo._id)}>Delete</button>
            <button onClick={() => handleUpdateTodo(todo._id, "Updated Text")}>Update</button>
          </li>
        ))}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const text = e.target.elements.text.value;
          handleSaveTodo(text,timestamp);
          e.target.reset();
        }}
      >
        <input type="text" name="text" placeholder="Enter a task" required />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default ToDoList;







        
      
