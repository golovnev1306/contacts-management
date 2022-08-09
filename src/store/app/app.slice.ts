import {
  createSlice, PayloadAction,
} from '@reduxjs/toolkit';

const initialState = {
  isAppInitialized: false
};

type TAppState = typeof initialState

const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setIsAppInitialized(
      state: TAppState,
      { payload: isAppInitialized }: PayloadAction<boolean>,
    ) {
      state.isAppInitialized = isAppInitialized;
    }
  },
});

export const {
  setIsAppInitialized,
} = appSlice.actions;

export const app = appSlice.reducer;
