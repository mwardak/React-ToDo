import React, { useState, useEffect } from "react";
import "./App.css";


//

const App = () => {
  //remove todo's
  //create 2 pieces of state: 1 . to store newtodo & 2. to store the list of todos
  const [inputValue, setinputValue] = useState("");
  const [todos, setTodos] = useState([]);

  

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
      { text: inputValue, done: false, id: Math.random().toFixed(3) * 512 },
    ];
    setTodos(newTodos);
    
    //

    setinputValue("");

    
  };
  // Clear entire todos array
  const clearArr = (e) => {
    e.preventDefault();
    setTodos([]);
  };

  const deleteItem = (e, id) => {
    e.preventDefault();
    //filter through each item.done in the array
    setTodos(todos.filter((todo) => todo.id != id));
    // to delete an item check if todo.id (which are todos in state) are not equal to the item being deleted
    // this will return all a new array of all the items that are not equal to id and state is updated with the new array
    // this is will have 1 less item from the old array because once the logic is false and todo.id does equal id that item
    // will not be returned in the new array
    //filter through each item.done in the array
    //if checkbox is checked then item.done === true,  set style to strike through
    //then when button is clicked it should remove item from array
  };
 
//retrieve todos from local storage
  const getData = () => { 
    const localData = localStorage.getItem("todos");
   return localData ? JSON.parse(localData) : [];
  };

  //save todos to local storage
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
  getData();
},  [todos]);


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
