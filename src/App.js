import React, { useState, useRef } from 'react';
import './App.css';
//this comment is for an extra commit because 
//aws is not able to see the repository that this code is in for some reason

function App() {
  //Set up state to manage the todo list
  const [todos, setTodos] = useState([]);
  //Stores the input element reference
  const todoInputRef = useRef();

  //Adds new todo
  const handleAddTodo = () => {
    const newTodo = todoInputRef.current.value;
    //ensure input is not empty
    if (newTodo !== '') {
      //add newTodo to todos array
      setTodos([...todos, newTodo]);
      //clear input
      todoInputRef.current.value = '';
    }
  };

  //Removes a todo
  const handleRemoveTodo = (index) => {
    //filters out the todo at the index passed
    const updatedTodos = todos.filter((_, i) => i !== index);
    //re-renders to update the todo list
    setTodos(updatedTodos);
  };
  //dynamic webpage html
  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <div className="todo-input-container">
        <input type="text" id="input-text" ref={todoInputRef} placeholder="Add a new todo" />
      </div>
      <ul className="todo-list">
        {/**Maps todos from todo array in state to a list item. This will repeat should the website be re-rendered, thus keeping the list refreshed */}
        {todos.map((todo, index) => (
          <li
            key={index}
            //Ternary to check whether this element is even or odd, then add the corresponding className
            className={index % 2 === 0 ? 'even' : 'odd'}
            //Adds or removes styles when the user hovers or removes their cursor over the element, respectively
            onMouseOver={(e) => e.target.classList.add('hovered')}
            onMouseOut={(e) => e.target.classList.remove('hovered')}
          >
            {todo}
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="add-btn-container">
        <button id="add-button" onClick={handleAddTodo}>Add</button>
      </div>
    </div>
  );
};

export default App;
