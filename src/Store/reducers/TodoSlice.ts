import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITodo, TodoState } from '../../models/ITodo';
import { fetchTodos } from './ActionCreators';

const initialState: TodoState = {
  todos: [],
  isLoading: false,
  error: ""
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {

    todoCreated: (state, action) => {
      state.todos.push(action.payload);
    },
    todoDeleted: (state, action) => {
      state.todos = state.todos.filter(item => item.id !== action.payload);
    },
    todoUpdated: (state, action) => {
      const todoIndex = state.todos.findIndex(todo => todo.id === action.payload.id);
      state.todos[todoIndex] = action.payload;
    }
  },
  extraReducers: {
    [fetchTodos.fulfilled.type]: (state, action: PayloadAction<ITodo[]>) => {
      state.isLoading = false;
      state.error = "";
      state.todos = action.payload;
    },
    [fetchTodos.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchTodos.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload
    }
  }
});

export const { actions, reducer } = todoSlice;
export const {
  todoCreated,
  todoDeleted,
  todoUpdated,
} = actions;