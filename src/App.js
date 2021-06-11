import React, { useState, useEffect } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  //remove todo's
  //create 2 pieces of state: 1 . to store newtodo & 2. to store the list of todos
  const [inputValue, setinputValue] = useState("");
  const [todos, setTodos] = useState([]);

  //get todos from local storage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(todos);
  }, []);

  //save todos to local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //handle the change of state
  const handleOnChange = (event) => {
    const input = event.target.value;
    setinputValue(input);
  };

  // handle submission of todos that are entered and store in a new array and update prev state
  const handleSubmit = (event) => {
    event.preventDefault();

    //Use spread operator to reference todos and setTodos new todo to end of array
    const newTodos = [
      ...todos,
      { text: inputValue, done: false, id: uuidv4() },
    ];
    setTodos(newTodos);
    setinputValue("");
  };
  // Clear entire todos array
  const clearArr = (e) => {
    e.preventDefault();
    setTodos([]);
  };

  const deleteTodo = (e, id) => {
    e.preventDefault();

    const newTodos = todos.filter((todo) => {
      if (todo.id === id && todo.done) return false;
      return true;
    });

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
    setTodos(newTodos);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="card">
          <div className="header">
            <h1>NWR Tasks</h1>
            <div className="form">
              <div className="form-inputs">
                <input
                  onChange={handleOnChange}
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
                  <div className="list-line">
                    <input
                      type="checkbox"
                      onChange={() => toggleTodo(todo.id)}
                      checked={todo.done}
                    ></input>

                    <li
                      key={todo.id}
                      style={
                        todo.done ? { textDecoration: "line-through" } : null
                      }
                    >
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
