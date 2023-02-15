import { configureStore } from '@reduxjs/toolkit';
import Teacher from './Teacher store/Teacher';
import User from './User store/user';
export const store = configureStore({
  reducer: {
    teacher: Teacher,
    user: User,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['your/action/type'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates'],
      },
    }),
});
