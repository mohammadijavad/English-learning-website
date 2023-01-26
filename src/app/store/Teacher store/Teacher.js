import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const TEACHER_URL = ' http://localhost:3100/Teachers';
const initialState = {
  teachers: [],
  status: 'idle', // 'idle' | 'loading' | 'sucess' | 'faild'
  error: null,
};
export const fetchTeachers = createAsyncThunk(
  'teachers/fetchTeachers',
  async () => {
    const response = await axios.get(TEACHER_URL);
    return response.data;
  }
);

// First, create the thunk
export const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId) => {
    // const response = await userAPI.fetchById(userId)
    // return response.data
    console.log(userId, 222222);
  }
);
const teachersSlice = createSlice({
  name: 'teacher',
  initialState,
  reducers: {
    favoriteTeacher(state, action) {
      console.log(state);
      console.log(action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTeachers.pending, (state, action) => {
        state.status = 'loading';
      })

      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.teachers = action.payload;
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export const selectAllTeacher = (state) => state.teacher.teachers;
export const getTeacherStatus = (state) => state.teacher.status;
export const getTeacherError = (state) => state.teacher.error;
export const { favoriteTeacher } = teachersSlice.actions;
export default teachersSlice.reducer;
