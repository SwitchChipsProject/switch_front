import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserStateType = {
  value: number;
};

const initialState: UserStateType = { value: 1 };

export const useSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default useSlice;
