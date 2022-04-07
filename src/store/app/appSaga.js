import { put, takeLatest } from "redux-saga/effects";
import {
  GET_RESULT,
  GET_RESULT_BY_NAME,
  setResult,
  setResultByName,
} from "./appAction";

const fetchResult = async (name) => {
  const response = await fetch(`http://testapi.hits.ai/result/${name || ""}`);
  const result = await response.json();
  return result;
};

function* getResult() {
  const result = yield fetchResult();
  yield put(setResult(result));
}

function* getResultByName(action) {
  const result = yield fetchResult(action.payload);
  yield put(setResultByName({ key: action.payload, value: result }));
}

export default function* watcher() {
  yield takeLatest(GET_RESULT, getResult);
  yield takeLatest(GET_RESULT_BY_NAME, getResultByName);
}
