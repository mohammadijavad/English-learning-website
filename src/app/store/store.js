import { configureStore } from '@reduxjs/toolkit';
import Teacher from './Teacher store/Teacher';
import User from './User store/user';
export const store = configureStore({
  reducer: {
    teacher: Teacher,
    user: User,
  },
});
