import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { fetchListBooksSuccess } from "../actions";
import { getBooks } from "../services/api";
import { BookActionTypes } from "../util/api";

  function* handleBooksFetchList(action) {
    try {
      const res = yield call(getBooks, action);
      const payload = res ? res.data : {};
  
      yield put(fetchListBooksSuccess(payload, action.page));
    } catch (err) {
      console.error(err);
    }
  }
  
  function* watchFetchListBooks() {
    yield takeLatest(BookActionTypes.FETCH_LIST_BOOKS, handleBooksFetchList);
  }
  
  function* bookSaga() {
    yield all([fork(watchFetchListBooks)]);
  }
  
  export default bookSaga;