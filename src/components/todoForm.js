import React, { useState } from 'react';
import '../App.css';



const TodoForm = ({ dispatch }) => {
     const [item, setItem] = useState ('');

     const handleChanges = e => {
         setItem(e.target.value);
     };

     const submitForm = e => {
         e.preventDefault();
         dispatch({
             type: 'ADD_TODO',
             payload: item
         });
         setItem('');

     };

     const clearCompleted = e => {
         e.preventDefault();
         dispatch({
             type: 'CLEAR_COMPLETED'
         });
     };

    return(
        <div className = "form">
            <form onSubmit= {submitForm}>
            <input 
            className = "input"
            type = "text"
            name = "todo"
            value = {item} 
            onChange = {handleChanges}
            />

            <button 
            className = "button"
            > Add </button>
            <button 
            className = "button" 
            onClick = {clearCompleted}
            >Clear Completed</button>
            </form>
        </div>
       
    );

};

export default TodoForm;