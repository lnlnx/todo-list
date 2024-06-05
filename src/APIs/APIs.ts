const baseURL = "http://localhost:3000/todos";

import { Todo } from "../todoSlice";

export const getTodosAPI = () => {
  return fetch(baseURL,{
    method: "GET",
    headers: {
      "Content-Type": "application/json",
  },
  }).then((res)=>res.json());
}

export const addTodoAPI = (newTodo: Todo[]) => {
  const [item] = newTodo
  return fetch(baseURL, {
    method: "POST",
    body: JSON.stringify(item),
  }).then((res) => res.json());
}

export const deleteTodoAPI = (id: string) => {
  return fetch(`${baseURL}/${id}`, {
    method: "DELETE",
  })
}

export const editTodoAPI = (id: string,updatedTodo:Todo) => {
  return fetch(`${baseURL}/${id}`, {
    method: "PATCH",
    body: JSON.stringify(updatedTodo),
  }).then((res) => res.json());
}