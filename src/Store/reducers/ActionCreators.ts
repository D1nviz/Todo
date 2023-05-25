import { createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

export const fetchTodos = createAsyncThunk(
  "todo/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { request } = useHttp();
      return await request("http://localhost:3001/todos");
    } catch (error) {
      return thunkAPI.rejectWithValue("Loading todos failed");
    }
  }
);