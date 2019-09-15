import * as api from "./api";
import { put, call } from "redux-saga/effects";
import * as types from "../store/types";

export function* getData() {

  let data = yield call(api.getData);
  yield put({ type: types.SET_DATA, payload: data });
}
