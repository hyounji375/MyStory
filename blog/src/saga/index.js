import { all, fork } from "redux-saga/effects";
import axios from "axios";
import postSaga from "./postSaga";
import userSaga from "./userSaga";

axios.defaults.baseURL = "http://localhost:3030";
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(userSaga), fork(postSaga)]);
}
