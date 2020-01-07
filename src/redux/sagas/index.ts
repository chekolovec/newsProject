import { all, call, put, takeEvery } from "redux-saga/effects";

import { FETCH_DATA, fetchDataError, fetchDataSuccess } from "../actions";

const fetchData = (url: string) => fetch(url).then((res) => res.json());

function* fetchArticles() {
  try {
    const data = yield call(
      fetchData,
      "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=wMAzqTW3cOqiNJA6n0J99qIKeeuofRZ2",
    );
    yield put(fetchDataSuccess(data.results));
  } catch (err) {
    yield put(fetchDataError(err));
  }
}

function* watchFetchData() {
  yield takeEvery(FETCH_DATA, fetchArticles);
}

export default function*() {
  yield all([watchFetchData()]);
}
