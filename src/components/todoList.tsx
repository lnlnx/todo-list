import {getTodosAPI, addTodoAPI, deleteTodoAPI} from '../APIs/APIs'
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import {listTodos, deleteTodo, editTodo} from '../todoSlice';
import TodoItem from './todoItem';
import './todo.css';
import React from 'react';
import {StateType, Todo} from '../todoSlice';
const TodoList = () => {
    const dispatch = useDispatch();
    const {todos} = useSelector((state:StateType ) => state.todos);
    useEffect(()=>{
        getTodosAPI().then((data)=>{
        dispatch(listTodos(data));
       });
    },[])

    return <ul>
        {todos?.map((item: Todo)=>{
            return <TodoItem todo={item} id={item.id} key={item.id}/>
        })}
    </ul>

}

export default TodoList;
