import { all, takeLeading } from "redux-saga/effects";
import { initApp } from './appSlice';

function* appInitWorker() {
  return undefined;
  // const token = getToken();
  // if (token) {
  //   return;
  // }
  //
  // window.location.href = '/auth';
  // try {
  //   yield call(ArchiveService.archive, entity, ids)
  //   successFn && successFn()
  //   message.success('Помещено в архив')
  // } catch (e) {
  //   console.log(e)
  // }
}

export function* appWatcher() {
  yield all([
    takeLeading(initApp, appInitWorker),
  ])
}