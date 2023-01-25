import { configureStore } from "@reduxjs/toolkit";
import Teacher from "./Teacher store/Teacher";
export const store = configureStore({
  reducer: {
    teacher: Teacher,
  },
});
