
import './App.css';

const App = () => {
  return (
    <div className="container">
        <div className="card">
            <div className="header">
                <h1>To Do List</h1>
                <div className="form">
                    <div className="form-inputs">
                        <input type="text" name="newTodo" autocomplete="off" placeholder="Enter your todo"/>
                        <button id="add-btn" onClick="validateInput()">Add</button>
                    </div>
                </div>
            </div>
            <div className="item-list">
                <ul id="list">
                <li><i className="fas fa-square fa-lg uncheck" data-done="false"></i><span></span><i className="fas fa-times-circle delete-btn fa-lg" style={{visibility: "hidden"}}></i></li><li><i className="fas fa-square fa-lg uncheck" data-done="false"></i><span></span><i className="fas fa-times-circle delete-btn fa-lg" style={{visibility: "hidden"}}></i></li></ul>
            </div>
            <button id="clear-btn" onClick="clearList()" style={{visibility: "visible"}}>Clear List</button>
        </div>
    </div>
    
  );
}

export default App;
