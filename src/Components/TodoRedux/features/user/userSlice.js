import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userService from './userService';

export const signUp = createAsyncThunk('user/signUp', async (newUser) => {
  return await userService.signUp(newUser);
});
export const signIn = createAsyncThunk('user/signIn', async (user) => {
  return await userService.signIn(user);
});

export const signOut = createAsyncThunk('user/signOut', async () => {
  return await userService.signOut();
});

export const signInGoogle = createAsyncThunk('user/signInGoogle', async () => {
  return await userService.signInGoogle();
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    info: {
      email: '',
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.info.email = action.payload.user.email;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        console.log(action.payload.user.email);
        state.info.email = action.payload.user.email;
      })
      .addCase(signOut.fulfilled, (state, action) => {
        state.info.email = '';
      })
      .addCase(signInGoogle.fulfilled, (state, action) => {
        console.log(action.payload.user);
        state.info.email = action.payload.user.email;
      });
  },
});

export default userSlice.reducer;
