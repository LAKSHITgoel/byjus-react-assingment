import * as types from "../store/types";
import { takeLatest } from "redux-saga/effects";
import * as call from "./call";

export function* homeSaga() {
  yield takeLatest(types.GET_DATA, call.getData);
}
