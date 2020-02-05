import React from 'react';
import '../App.css'

function Todo({ todo, dispatch }) {
    
    const toggleCompleted = () => {
        dispatch({
            type: 'TOGGLE_COMPLETED',
            payload: todo.id
        });
    };
    return (
        <div className = "item-list">
            <div
            onClick = {toggleCompleted}
            className = {`todo${todo.completed ? 'completed' : ""}`}
            style = {{ textDecoration: todo.completed ? 'line-through' : "" }}
            >
                <p className = "item"> {todo.item} </p>
            </div>
        </div>
    );
}

export default Todo;