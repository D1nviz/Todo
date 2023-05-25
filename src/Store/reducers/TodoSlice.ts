import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITodo, TodoState } from '../../models/ITodo';
import { fetchTodos } from './ActionCreators';
import { addTodo, removeTodo, updateTodo } from "../../services/todoUtils";

const initialState: TodoState = {
  todos: [],
  isLoading: false,
  error: ""
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {

    todoCreated: (state, action: PayloadAction<ITodo>) => {
      addTodo(state, action);
    },
    todoDeleted: (state, action: PayloadAction<string>) => {
      removeTodo(state, action);
    },
    todoUpdated: (state, action: PayloadAction<ITodo>) => {
      updateTodo(state, action)
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