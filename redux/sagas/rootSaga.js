import {all} from 'redux-saga/effects';

//sagas
import users from './users';

//export the root saga
function* rootSaga() {
  yield all([users()]);
}

export default rootSaga;
