import { all, fork } from 'redux-saga/effects';
import newsSaga from './newsSaga';


export default function *rootSaga() {
  return yield all([
    fork(newsSaga),
  ]);
}
