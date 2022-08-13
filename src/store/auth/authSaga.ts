import { all, call, put, takeLeading } from "redux-saga/effects";
import { getCurrentUser, login, logout, setIsAuth, setIsLoading, setUser, setUserHasBeenRequested } from './authSlice';
import authService from '../../transport/services/authService';
import { PayloadAction } from '@reduxjs/toolkit';
import Auth from '../../common/types/Auth';
import AccessToken from '../../common/types/AccessToken';
import { getToken, removeToken, setToken } from '../../common/helpers/token';
import UserEntity from '../../common/types/entities/User';

function* currentWorker() {
  try {
    yield put(setIsLoading(true));

    const token = getToken();
    if (token) {
      const user: UserEntity = yield call(authService.current);
      yield put(setUser(user));
      yield put(setIsAuth(true));
    }
  } catch (e) {
    console.warn(e);
  } finally {
    yield put(setIsLoading(false));
    yield put(setUserHasBeenRequested(true));
  }
}

function* loginWorker({ payload }: PayloadAction<Auth>) {
  try {
    yield put(setIsLoading(true));
    const {
      accessToken,
      user,
    }: AccessToken<{ user: UserEntity }> = yield call(authService.login, payload);
    setToken(accessToken);

    yield put(setUser(user));
    yield put(setIsAuth(true));
  } catch (e) {
    console.warn(e);
  } finally {
    yield put(setIsLoading(false));
  }
}

function* logoutWorker() {
  try {
    yield put(setIsLoading(true));
    // todo here will be request to backend
    removeToken();
    yield put(setUser(null));
    yield put(setIsAuth(false));
  } catch (e) {
    console.warn(e);
  } finally {
    yield put(setIsLoading(false));
  }
}

export function* authWatcher() {
  yield all([
    takeLeading(getCurrentUser, currentWorker),
    takeLeading(login, loginWorker),
    takeLeading(logout, logoutWorker),
  ])
}