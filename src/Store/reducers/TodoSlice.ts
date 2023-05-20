import { v4 as uuidv4 } from 'uuid';
import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { ITodo } from '../../models/ITodo';


export interface TodoState {
  todos: ITodo[];
}

const initialState: TodoState = {
  todos: [
    {
      id: uuidv4(),
      task: "Do homework",
      isCompleted: false,
    },
    {
      id: uuidv4(),
      task: "Do homework",
      isCompleted: true,
    },
    {
      id: uuidv4(),
      task: "Do homework",
      isCompleted: false,
    }
  ]
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    todoCreated: (state, action) => {
      state.todos.push(action.payload);
      console.log(state)
    },
    todoDeleted: (state, action) => {
      state.todos = state.todos.filter(item => item.id !== action.payload);
      console.log("todo deleted");
    },
    todoCompleted: (state, action) => {
      const { id, isCompleted } = action.payload;
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        Object.assign(todo, { isCompleted });
      }
    },
    todoRedacted: (state, action) => {
      /* todosAdapter.updateOne(state, action.payload) */
    }
  }
})
export const { actions, reducer } = todoSlice;
export const {
  todoCreated,
  todoDeleted,
  todoCompleted,
  todoRedacted } = actions;
