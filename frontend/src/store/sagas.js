import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import * as api from './api.js'
import * as actions from './actions'
// worker Saga: will be fired on GET_BOOKS actions
function* getPosts(action) {
   try {
      const {data} = yield api.getPosts();
      console.log(data);
      yield put(actions.getPostsSuccess(data));
   } catch (e) {
      yield put(actions.getPostsFail('error',e));
   }
}
function* getBooks(action) {
  try {
     const {data} = yield api.getBooks();
     console.log(data);
     yield put(actions.getBooksSuccess(data));
  } catch (e) {
     yield put(actions.getBooksFail('error',e));
  }
}


export function* mySaga() {
  yield takeLatest("GET_POST", getPosts);
}
export function* watcherBooks() {
  yield takeLatest("GET_BOOKS", getBooks);
}


  export default function* rootSaga() {
    yield all([
        mySaga(),
        watcherBooks(),
    ]);
 }