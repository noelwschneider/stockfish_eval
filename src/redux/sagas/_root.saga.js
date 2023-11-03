import { all } from 'redux-saga/effects';

import position from './position.saga';

export default function* rootSaga() {
  yield all([
    position()
  ]);
}