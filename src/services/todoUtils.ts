import { PayloadAction } from "@reduxjs/toolkit";
import { ITodo, TodoState } from "../models/ITodo";

export const addTodo = (state: TodoState, action: PayloadAction<ITodo>) => {
  state.todos.push(action.payload);
};
export const removeTodo = (state: TodoState, action: PayloadAction<string>) => {
  state.todos = state.todos.filter(todo => todo.id !== action.payload);
};
export const updateTodo = (state: TodoState, action: PayloadAction<ITodo>) => {
  const todoIndex = state.todos.findIndex(todo => todo.id === action.payload.id);
  state.todos[todoIndex] = action.payload;
};