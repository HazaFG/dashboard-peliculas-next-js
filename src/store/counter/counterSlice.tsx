import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 5
};

const counterSlice = createSlice({
  name: 'sliceName',
  initialState,
  reducers: {
    // reducers here
  }
});

export const { } = counterSlice.actions;

export default counterSlice.reducer;
