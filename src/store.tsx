import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import todosReducer from './todoSlice';

const store = configureStore({
    reducer: {
        todos: todosReducer,
     
    }
})

export default store


// setupListeners(store.dispatch);