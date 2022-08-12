import { all } from 'redux-saga/effects';
import { appWatcher } from './app/appSaga';
import { authWatcher } from './auth/authSaga';

export default function* rootSaga() {
  yield all([
    appWatcher(),
    authWatcher(),
  ]);
}
