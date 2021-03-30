import React, { useState } from "react";
import "./App.css";

const App = () => {
  //remove todo's
  //create state to hold list of todo's
  const [todos, setTodos] = useState([]);

  //add todo's to list
  const handleOnChange = (event) => {
    setTodos(event.target.value);
  };

  // map through list of todo's and reuturn list items (li). this should be inside of a ul/ol
  const handleButtonClick = (event) => {
    event.preventDefault();
   
  };

  const storedList = todos.map((todo) => {
    return (
      <ul>
        <li>{todo}</li>
      </ul>
    )
  });

  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <h1>To Do List</h1>
          <div className="form">
            <div className="form-inputs">
              <input
                onChange={handleOnChange}
                type="text"
                name="newTodo"
                placeholder="Enter your todo"
                value={todos}
              />
              <button id="add-btn" onClick={handleButtonClick}>
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="item-list">
          <ul id="list">{storedList}</ul>
        </div>
        <button id="clear-btn" style={{ visibility: "visible" }}>
          Clear List
        </button>
      </div>
    </div>
  );
};

export default App;
