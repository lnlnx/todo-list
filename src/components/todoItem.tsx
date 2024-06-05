
import { useDispatch } from 'react-redux';
import {deleteTodoAPI, editTodoAPI} from '../APIs/APIs'
import { deleteTodo } from '../todoSlice';
import React, { useState } from 'react';
interface TodoItem {
    todo: {
        id: string
        content: string
    },
    id: string,
    key: string
}
const TodoItem = (props: TodoItem) => {
    const {todo} = props;
    const dispatch = useDispatch();
    const [editing, setEditing] = useState(false);
    const [newInput, setNewIput] = useState(todo.content)
    const handleEdit = ()=>{
        setEditing(true);
    }
    const handleDelete = () => {
        deleteTodoAPI(todo.id);
        dispatch(deleteTodo(todo.id));
    }
    const handleInputEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVal = e.target.value;
        setNewIput(newVal)
        
    }
    const handleInputOnBlur = () => {
        setEditing(false);
        const updatedTodo = {
            content: newInput
        }
        editTodoAPI(todo.id, updatedTodo);
        
    }
    const eleForTodo = editing ? <input value={newInput} onChange={handleInputEdit} onBlur={handleInputOnBlur}></input> : <p>{newInput}</p>

    return (
        <li key={todo.id} className="list-item">
            {eleForTodo}
            <div>
                {editing?<></>:<button onClick={handleEdit}>Edit</button>}
                <button onClick={handleDelete}>Delete</button>
            </div>
            
        </li>
    )
}

export default TodoItem;