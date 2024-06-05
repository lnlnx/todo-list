import {createAsyncThunk} from '@reduxjs/toolkit';
const baseURL = "http://localhost:3000/todos";

export const getTodosAPI = () => {
  return fetch(baseURL,{
    method: "GET",
    headers: {
      "Content-Type": "application/json",
  },
  }).then((res)=>res.json());
}

export const addTodoAPI = (newTodo) => {
  return fetch(baseURL, {
    method: "POST",
    body: JSON.stringify(newTodo),
  }).then((res) => res.json());
}

export const deleteTodoAPI = (id) => {
  return fetch(`${baseURL}/${id}`, {
    method: "DELETE",
  })
}

export const editTodoAPI = (id,updatedTodo) => {
  return fetch(`${baseURL}/${id}`, {
    method: "PATCH",
    body: JSON.stringify(updatedTodo),
  }).then((res) => res.json());
}