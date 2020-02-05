import React from 'react';
import './App.css';
import TodoList from './components/todoList';


function App() {

  // const [state, dispatch] = useReducer(reducer, todo);

  return (
    <div className="App">  
        <TodoList />
    </div>
  );
}

export default App;
