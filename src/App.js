import React, { useState } from "react";
import "./App.css";

const App = () => {
  //remove todo's
  //create 2 pieces of state: 1 . to store newtodo & 2. to store the list of todos
  const [inputValue, setinputValue] = useState("");
  const [todos, setTodos] = useState([]);

  //add todo's to list
  const handleOnChange = (event) => {
    const input = event.target.value;
    setinputValue(input);
  };

  // map through list of todo's and reuturn list items (li). this should be inside of a ul/ol
  const handleSubmit = (event) => {
    event.preventDefault();
    const todoItems = [...todos, inputValue];
    setTodos(todoItems);
    setinputValue('')
  };

  return (
    <form onSubmit={handleSubmit}>
    <div className="container">
      <div className="card">
        <div className="header">
          <h1>To Do List</h1>
          <div className="form" >
            <div className="form-inputs">
              <input
                onChange={handleOnChange}
                type="text"
                name="newTodo"
                placeholder="Enter your todo"
                value={inputValue}
                required
              />
              <button id="add-btn">Add</button>
            </div>
          </div>
        </div>
        <div className="item-list">
          <ul id="list">
            {todos.map((todo, index) => {
              return <div className="list-line">
                <input type="checkbox" ></input><li key={index}>{todo}</li>
                </div>
            })}
          </ul>
        </div>
        <button id="clear-btn" style={{ visibility: "visible" }}>
          Clear List
        </button>
      </div>
    </div>
    </form>
  );
};

export default App;
