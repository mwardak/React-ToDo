import React, { useState, useEffect } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [inputValue, setinputValue] = useState("");
  const [todos, setTodos] = useState([]);

  //get todos from local storage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(todos);
  }, []);

  //handle the change of state
  const handleChange = (e) => setinputValue(e.target.value);

  // handle submission of todos that are entered and store in a new array and update prev state
  const handleSubmit = (e) => {
    e.preventDefault();

    //Use spread operator to make a copy of todos and setTodos new todo to end of array
    const newTodos = [
      ...todos,
      { text: inputValue, done: false, id: uuidv4() },
    ];
    setTodos(newTodos);
    setSavedTodos(newTodos);
    setinputValue("");
  };

  // Clear entire todos array
  const clearList = (e) => {
    e.preventDefault();
    setSavedTodos([]);
    setTodos([]);
  };

  const deleteTodo = (e, id) => {
    e.preventDefault();

    const newTodos = todos.filter((todo) => !(todo.id === id && todo.done));
    setSavedTodos([]);
    setTodos(newTodos);
  };

  const toggleTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
        return todo;
      }
      return todo;
    });
    setSavedTodos(newTodos);
    setTodos(newTodos);
  };

  //save todos to local storage
  const setSavedTodos = (todos) => localStorage.setItem("todos", JSON.stringify(todos));

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="card">
          <div className="header">
            <h1>NWR Tasks</h1>
            <div className="form">
              <div className="form-inputs">
                <input
                  onChange={handleChange}
                  type="text"
                  name="newTodo"
                  placeholder="Enter your task"
                  value={inputValue}
                  required
                />
                <button id="add-btn">Add</button>
              </div>
            </div>
          </div>

          <div className="item-list">
            <ul id="list">
              {todos.map((todo) => {
                return (
                  <div key={todo.id} className="list-line">
                    <input
                      type="checkbox"
                      onChange={() => toggleTodo(todo.id)}
                      checked={todo.done}
                    ></input>

                    <li
                      key={todo.id} style={todo.done ? { textDecoration: "line-through" } : null}>
                      {todo.text}
                    </li>

                    <button
                      className="delete"
                      onClick={(e) => deleteTodo(e, todo.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                );
              })}
            </ul>
          </div>

          <button
            id="clear-btn"
            onClick={clearList}
            style={{ visibility: "visible" }}
          >
            Clear List
          </button>
        </div>
      </div>
    </form>
  );
};

export default App;
