import appSaga from "./app/appSaga";
import { all, fork } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([fork(appSaga)]);
}
