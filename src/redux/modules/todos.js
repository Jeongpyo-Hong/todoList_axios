import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Thunk
export const __getTodos = createAsyncThunk(
  "todos/getTodos",
  async (_, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/todos");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addTodo = createAsyncThunk(
  "todos/addtodo",
  async (payload, thunkAPI) => {
    console.log("payload:", payload);
    try {
      const data = await axios.post("http://localhost:3001/todos", payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 여기부터 다시 수정하기-------------------------------------------------------------
export const __deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (payload, thunkAPI) => {
    console.log("payload:", payload);
    try {
      const data = await axios.delete("http://localhost:3001/todos", payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __toggleStatusTodo = createAsyncThunk(
  "todos/toggleStatusTodo",
  async (payload, thunkAPI) => {
    console.log("payload:", payload);
    try {
      const data = await axios.patch("http://localhost:3001/todos", payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//initialState
const initialState = {
  todos: [
    {
      id: 0,
      title: "",
      content: "",
      isDone: false,
    },
  ],
  isLoading: false,
  error: null,
};

// reducer
export const todoSilce = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [__addTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__addTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos.push(action.payload);
    },
    [__addTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [__getTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    },
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deleteTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteTodo.fulfilled]: (state, action) => {
      console.log("delete:", action);
      state.isLoading = false;
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    [__deleteTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__toggleStatusTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__toggleStatusTodo.fulfilled]: (state, action) => {
      console.log("toggle:", action);
      state.isLoading = false;
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? (todo.isDone = !todo.isDone) : todo
      );
    },
    [__toggleStatusTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { deleteTodo, toggleStatusTodo } = todoSilce.actions;
export default todoSilce.reducer;

// deleteTodo: (state, action) => {
//   state.todos = state.todos.filter((todo) => todo.id !== action.payload);
// },
// toggleStatusTodo: (state, action) => {
//   state.todos = state.todos.map((todo) =>
//     todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
//   );
// },
