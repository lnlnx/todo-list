import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const todosSlice = createSlice({
    name: 'todosList',
    initialState: {
      todos: [],
    },
    reducers: {
      addTodo(state, action) {
        state.todos.push(action.payload);
        
      },
      editTodo(state, action) {
        
      },
      deleteTodo(state, action) {
        const {payload} = action;
        state.todos = state.todos.filter((item)=>{
          return item.id !== payload;
        })
      },
      listTodos(state, action) {
        state.todos = action.payload;
      }
    },
  });
  
  export const { addTodo, editTodo, deleteTodo, listTodos} = todosSlice.actions;
  export default todosSlice.reducer; 