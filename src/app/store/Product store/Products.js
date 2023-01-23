import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Teachers: [],
  TeachersTotal: 0,
  FavoriteTeachers: [],
};

export const TeacherSlice = createSlice({
  name: "Teacher",
  initialState,
  reducers: {},
});
