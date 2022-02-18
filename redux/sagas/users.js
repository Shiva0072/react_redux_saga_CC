import {call, put, takeEvery} from 'redux-saga/effects';

import {
  fetchUser,
  fetchUserSucess,
  fetchUserFailure,
} from '../actions/entities/users';
import actiontypes from '../actions/actionTypes';

//api
const api = args => {
  console.log('args recieved in API : ', args);
  return [1, 2, 3, ' My Saga'];
};

//worker sagas
function* fetchUserSaga(action) {
  console.log('action recieved in worker saga : ', action);
  try {
    const users = yield call(api, 'the argument from worker saga');
    yield put(fetchUserSucess(users));
  } catch (err) {
    yield put(fetchUserFailure(err));
  }
}

//watcherSaga
function* watchfetchUser() {
  yield takeEvery(actiontypes.FETCH_USER, fetchUserSaga);
}

export default watchfetchUser;
