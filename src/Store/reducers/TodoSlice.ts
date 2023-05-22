import { v4 as uuidv4 } from 'uuid';
import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { ITodo } from '../../models/ITodo';


export interface TodoState {
  todos: ITodo[];
}

const initialState: TodoState = {
  todos: [
    {
      id: uuidv4(),
      task: "Do homework",
      isCompleted: true,
    },
    {
      id: uuidv4(),
      task: "Make money",
      isCompleted: false,
    },
    {
      id: uuidv4(),
      task: "Make dinner",
      isCompleted: false,
    }
  ]
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    todoCreated: (state, action: PayloadAction<ITodo>) => {
      state.todos.push(action.payload);
    },
    todoDeleted: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(item => item.id !== action.payload);
    },
    todoUpdated: (state, action: PayloadAction<ITodo>) => {
      const { id } = action.payload;
      const todoIndex = state.todos.findIndex(todo => todo.id === id);
      state.todos[todoIndex] = action.payload;
      console.log("updated")

    },
  }
})
export const { actions, reducer } = todoSlice;
export const {
  todoCreated,
  todoDeleted,
  todoUpdated
} = actions;
