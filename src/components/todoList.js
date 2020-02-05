import React, { useReducer } from 'react';
import { reducer, todo } from '../reducers/reducer';
import TodoForm from './todoForm';
import Todo from './todo';


const TodoList = props => {
    
    const [state, dispatch] = useReducer(reducer, todo);

    return (

        <div>
           <TodoForm dispatch = {dispatch} />
           {state.map(todo => {
               return <Todo 
               key = {todo.id} 
               todo = {todo} 
               dispatch = {dispatch}
                />
           })}
        </div>
    );
};


export default TodoList;