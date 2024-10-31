import { call, put, takeEvery } from 'redux-saga/effects';
import {
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE,
  ADD_JOB_REQUEST,
  ADD_JOB_SUCCESS,
  DELETE_JOB_REQUEST,
  DELETE_JOB_SUCCESS,
} from '../src/actions';

// Fetch jobs from API
function* fetchJobsSaga(action) {
  try {
    const response = yield call(fetch, `https://6556cd42bd4bcef8b611a10d.mockapi.io/bai1?name=${action.query}`);
    const data = yield response.json();
    yield put({ type: FETCH_JOBS_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: FETCH_JOBS_FAILURE, payload: error.message });
  }
}

// Add job to API
function* addJobSaga(action) {
  try {
    const response = yield call(fetch, 'https://6556cd42bd4bcef8b611a10d.mockapi.io/bai1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: action.payload }),
    });
    const data = yield response.json();
    yield put({ type: ADD_JOB_SUCCESS, payload: data });
  } catch (error) {
    console.error(error);
  }
}

// Delete job from API
function* deleteJobSaga(action) {
  try {
    yield call(fetch, `https://6556cd42bd4bcef8b611a10d.mockapi.io/bai1/${action.payload}`, {
      method: 'DELETE',
    });
    yield put({ type: DELETE_JOB_SUCCESS, payload: action.payload });
  } catch (error) {
    console.error(error);
  }
}

function* rootSaga() {
  yield takeEvery(FETCH_JOBS_REQUEST, fetchJobsSaga);
  yield takeEvery(ADD_JOB_REQUEST, addJobSaga);
  yield takeEvery(DELETE_JOB_REQUEST, deleteJobSaga);
}

export default rootSaga;
