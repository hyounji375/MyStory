import { takeLatest, all, fork, call, put } from "redux-saga/effects";
import axios from "axios";
import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
  SIGN_FAILURE,
  SIGN_SUCCESS,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  SIGN_REQUEST,
} from "../reducer/userRD";

function loginApi(data) {
  return axios.post("/user/login", data);
}

function* login(action) {
  try {
    const result = yield call(loginApi, action.data);
    yield put({
      type: LOGIN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOGIN_FAILURE,
      error: err.response.data,
    });
  }
}

function* logoutApi() {
  return yield axios.post("/user/logout");
}

function* logout() {
  try {
    yield call(logoutApi);
    yield put({
      type: LOGOUT_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: LOGOUT_FAILURE,
      error: err.response.data,
    });
  }
}

function* signApi(data) {
  return yield axios.post("/user", data);
}

function* sign(action) {
  try {
    yield call(signApi, action.data);
    yield put({
      type: SIGN_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: SIGN_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, login);
}

function* watchLogout() {
  yield takeLatest(LOGOUT_REQUEST, logout);
}

function* watchSign() {
  yield takeLatest(SIGN_REQUEST, sign);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchLogout), fork(watchSign)]);
}
