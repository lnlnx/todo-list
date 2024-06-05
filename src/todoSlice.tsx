import { createSlice } from "@reduxjs/toolkit";

export interface StateType {
  todos: Todo[]
}
export interface Action {
  action: string;
  payload?: Todo[];
}
// interface actionTypeForSingleTodo {
//   action:string,
//   payload: todo
// }
// interface actionType
export interface Todo {
  content: string,
}

const todosSlice = createSlice({
    name: 'todosList',
    initialState: {
      todos: [],
    },
    reducers: {
      addTodo(state: StateType, action: Action) {
        const [item] = action.payload;
        state.todos.push(item);
        
      },
      // editTodo(state, action) {
        
      // },
      // deleteTodo(state: stateType, action: actionType) {
      //   const {payload} = action;
      //   state.todos = state.todos.filter((item)=>{
      //     return item.id !== payload.id;
      //   })
      // },
      listTodos(state:StateType, action: Action) {
        state.todos = action.payload;
      }
    },
  });
  
  export const { addTodo, editTodo, deleteTodo, listTodos} = todosSlice.actions;
  export default todosSlice.reducer; 