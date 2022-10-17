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

export const __deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (todoId, thunkAPI) => {
    console.log("delete payload:", todoId);
    try {
      await axios.delete(`http://localhost:3001/todos/${todoId}`); // 서버에서 삭제하는 용도
      return thunkAPI.fulfillWithValue(todoId); // 아랫줄이 reducer 함수에 id를 전달
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __toggleStatusTodo = createAsyncThunk(
  "todos/toggleStatusTodo",
  async (todo, thunkAPI) => {
    console.log("toggle payload:", todo.Id);
    try {
      const data = await axios.patch(
        `http://localhost:3001/todos/${todo.id}`,
        todo
      );
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
  extraReducers: (builder) => {
    builder.addCase(__addTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(__addTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos.push(action.payload);
    });
    builder.addCase(__addTodo.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(__getTodos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(__getTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    });
    builder.addCase(__getTodos.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(__deleteTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(__deleteTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("여기:", action.payload);
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    });
    builder.addCase(__deleteTodo.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(__toggleStatusTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(__toggleStatusTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      const index = state.todos.findIndex(
        (todo) => (todo.id = action.payload.id)
      );
      state.todos[index] = action.payload;
    });
    builder.addCase(__toggleStatusTodo.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

// export const {} = todoSilce.actions;
export default todoSilce.reducer;
