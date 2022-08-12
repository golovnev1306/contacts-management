import {
  createAction,
  createSlice, PayloadAction,
} from '@reduxjs/toolkit';

const initialState = {
  isAppLoading: false,
};

const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setIsAppLoading(
      state,
      { payload: isAppLoading }: PayloadAction<boolean>,
    ) {
      state.isAppLoading = isAppLoading;
    }
  },
});

export const initApp = createAction('appSlice/initApp');

export const {
  setIsAppLoading,
} = appSlice.actions;

export const app = appSlice.reducer;
