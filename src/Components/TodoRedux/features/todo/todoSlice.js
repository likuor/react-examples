import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import todoService from './todoService';

export const fetchTodos = createAsyncThunk('todo/fetchTodos', async () => {
  try {
    const response = await todoService.get();
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
});

export const addToFirebase = createAsyncThunk(
  'todo/addToFirebase',
  async (task) => {
    try {
      return await todoService.addToFirebase(task);
    } catch (e) {
      return e.message;
    }
  }
);

export const fetchTodosFromFirebase = createAsyncThunk(
  'todo/fetchTodosFromFirebase',
  async () => {
    try {
      const response = await todoService.getFromFirebase();
      return response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    } catch (error) {
      console.log(error.message);
      return error;
    }
  }
);

export const removeFromFirebase = createAsyncThunk(
  'todo/removeFromFirebase',
  async (id) => {
    return await todoService.removeFromFirebase(id);
  }
);

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    list: [],
    isLoading: false,
    isError: false,
    message: '',
  },
  reducers: {
    add: (state, action) => {
      state.list.push(action.payload);
    },
    remove: (state, action) => {
      state.list = state.list.filter((task) => task.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        if (action.payload.message) {
          state.message = action.payload.message;
        }
        state.list = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTodos.pending, (state, action) => {
        state.list = action.payload;
        state.isLoading = true;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(fetchTodosFromFirebase.fulfilled, (state, action) => {
        if (action.payload && action.payload.message) {
          state.message = action.payload.message;
        }
        console.log(action.payload);
        state.list = action.payload;
        state.isLoading = false;
      })
      .addCase(addToFirebase.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(removeFromFirebase.fulfilled, (state, action) => {
        state.list = state.list.filter((task) => task.id !== action.payload);
      });
  },
});

export const { add, remove } = todoSlice.actions;
// export const {actions} = todoSlice
export default todoSlice.reducer;
