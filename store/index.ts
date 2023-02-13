import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
  devTools: process.env.NODE_ENV === 'development', // 개발자도구 설정
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
