import React, { useState } from "react";
import "./App.css";

const App = () => {
  //remove todo's
  //create state to hold list of todo's
  const [todos, setTodos] = useState([]);
  const [expenseItem, setExpenseItem] = useState('');

  //add todo's to list
  const handleOnChange = (event) => {
    setTodos(event.target.value);
  };

  // map through list of todo's and reuturn list items (li). this should be inside of a ul/ol
  const handleSubmit = (event) => {
    event.preventDefault();
    setExpenseItem(event.target.value)
    setTodos({...todos, ...expenseItem});
    debugger;
    
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
          <form className="form" onClick={handleSubmit}>
            <div className="form-inputs">
              <input
                onChange={handleOnChange}
                type="text"
                name="newTodo"
                placeholder="Enter your todo"
                value={todos}
                required
              />
              <button id="add-btn" >
                Add
              </button>
            </div>
          </form>
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
