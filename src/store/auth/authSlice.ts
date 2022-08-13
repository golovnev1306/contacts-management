import {
  createAction,
  createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import Auth from '../../common/types/Auth';
import UserEntity from '../../common/types/entities/User';

const initialState = {
  isAuth: false,
  isLoading: false,
  userHasBeenRequested: false,
  user: null as UserEntity | null,
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setIsAuth(
      state,
      { payload: isAuth }: PayloadAction<boolean>,
    ) {
      state.isAuth = isAuth;
    },

    setIsLoading(
      state,
      { payload: isLoading }: PayloadAction<boolean>,
    ) {
      state.isLoading = isLoading;
    },

    setUserHasBeenRequested(
      state,
      { payload: userHasBeenRequested }: PayloadAction<boolean>,
    ) {
      state.userHasBeenRequested = userHasBeenRequested;
    },

    setUser(
      state,
      { payload: user }: PayloadAction<UserEntity | null>,
    ) {
      state.user = user;
    }
  },
});

export const getCurrentUser = createAction('authSlice/getCurrent');
export const login = createAction<Auth>('authSlice/login');
export const logout = createAction('authSlice/logout');

export const {
  setIsAuth,
  setUser,
  setIsLoading,
  setUserHasBeenRequested,
} = authSlice.actions;

export const auth = authSlice.reducer;
