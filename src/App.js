import './App.css';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, listTodos } from './todoSlice';
import { addTodoAPI, getTodosAPI } from './APIs/todoAPIs';
import TodoList from './components/todo/todoList';
import Login from './components/auth/login';
import { Routes, Route} from './react-router-dom';
function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = async() => {
    if(newTodo) {
      const newTodoBody = {
        content: newTodo
      }
      await addTodoAPI(newTodoBody);
      const newList = await getTodosAPI();
      dispatch(listTodos(newList));
    }
  };
  const handleTodoChange =(e) => {
    const inputVal = e.target.value;
    setNewTodo(inputVal);
  }
  return (
    // <div className="App">
    //   {/* <div>
    //     <input className="todo__input" onChange={handleTodoChange}/>
    //     <button className="todo__add-btn" onClick={handleAddTodo}>add todo</button>
    //   </div>
       
    //   <TodoList /> */}
    // <Login />
    // </div>
    <Routes>
      <Route path="/todos" element={<TodoList />}/>
      <Route path="/user" element={<Login />}/>

    </Routes>
  );
}

export default App;
