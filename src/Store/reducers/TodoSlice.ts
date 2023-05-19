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
      
    },
    todoDeleted: (state, action) => {
      /* todosAdapter.removeOne(state, action.payload) */
    },
    todoRedacted: (state, action) => {
      /* todosAdapter.updateOne(state, action.payload) */
    }
  }
})
const {actions, reducer} = todoSlice;
export const {todoCreated, todoDeleted} = actions;
export default todoSlice.reducer;