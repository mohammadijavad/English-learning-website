import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const USER_URL = ' http://localhost:3100/user';
const USERCLASSLIST_URL = ' http://localhost:3100/userClassesList';
const USERClASSTESTING_URL = ' http://localhost:3100/userClassesListTesting';
const initialState = {
  user: [],
  classList: [],
  classListTesting: [],
  status: 'idle', // 'idle' | 'loading' | 'sucess' | 'faild'
  error: null,
};
export const fetchUser = createAsyncThunk('user/getuser', async () => {
  const response = await axios.get(USER_URL);
  return response.data;
});
export const fetchClassList = createAsyncThunk('user/ClassList', async () => {
  const response = await axios.get(USERCLASSLIST_URL);
  return response.data;
});
export const fetchClassListTesting = createAsyncThunk(
  'user/ClassListTesting',
  async () => {
    const response = await axios.get(USERClASSTESTING_URL);
    return response.data;
  }
);
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchClassList.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchClassList.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.classList = action.payload;
      })
      .addCase(fetchClassList.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchClassListTesting.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchClassListTesting.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.classListTesting = action.payload;
      });
  },
});
export const selectUser = (state) => state.user.user;
export const getUserStatus = (state) => state.user.status;
export const getUserError = (state) => state.user.error;
export const getUserClassList = (state) => state.user.classList;
export const getUserTestClass = (state) => state.user.classListTesting;
export default userSlice.reducer;
