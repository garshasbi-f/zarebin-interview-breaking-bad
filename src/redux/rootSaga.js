import { fork } from "redux-saga/effects";
import infoSaga from "../features/Info/Saga";

function* rootSaga() {
  yield fork(infoSaga);
}

export default rootSaga;
