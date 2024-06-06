import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface StateType {
  todos: Todo[]
}
export interface Action {
  action: string;
  payload?: Todo[];
}

export interface Todo {
  content: string,
  id?: string
}

const todosSlice = createSlice({
    name: 'todosList',
    initialState: {
      todos: [],
    },
    reducers: {
      addTodo: (state, action)=> {
        const [item] = action.payload;
        state.todos.push(item);
        
      },
      deleteTodo: (state, action)=> {
        const {payload} = action;
        state.todos = state.todos.filter((item)=>{
          return item.id !== payload.id;
        })
      },
      listTodos:(state, action) =>{
        state.todos = action.payload;
      }
    },
  });
  
  export const { addTodo, listTodos, deleteTodo} = todosSlice.actions;
  export default todosSlice.reducer; 