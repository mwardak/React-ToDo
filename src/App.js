import React, { useState } from "react";
import "./App.css";

//

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

  // map through list of todo's and return list items (li). this should be inside of a ul/ol
  const handleSubmit = (event) => {
    event.preventDefault();
    //spread operator is a reference pointer
    setTodos([
      ...todos,
      { text: inputValue, done: false, id: Math.random().toFixed(3) * 512 },
    ]);

    setinputValue("");
    //
  };
  // empty todos array
  const clearArr = (e) => {
    e.preventDefault();
    setTodos([]);
  };

  const deleteItem = (e, id) => {
    e.preventDefault();
    //filter through each item.done in the array
    setTodos(todos.filter((todo) => todo.id != id));

    //if checkbox is checked then item.done === true,  set style to strike through
    //then when button is clicked it should remove item from array
  };

  return (
    <form onSubmit={handleSubmit}>
      
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
                  <div className="list-line">
                    <input type="checkbox"></input>
                    <li key={todo.id}>{todo.text}</li>
                    <button
                      className="delete"
                      onClick={(e) => deleteItem(e, todo.id)}
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
            onClick={clearArr}
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
