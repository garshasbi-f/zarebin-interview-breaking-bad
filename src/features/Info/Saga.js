import { takeEvery, call, put } from "redux-saga/effects";
import { ALL_CHARACTERS } from "./Action";
import { getAllCharactersFromServer } from "./Api";
import { getAllCharacters, setErrorMessage, setIsloading } from "./Slice";

function* handleGetAllCharacters(action) {
  try {
    yield put(setIsloading());
    const response = yield call(getAllCharactersFromServer, action.payload);
    yield put(getAllCharacters(response));
    yield put(setErrorMessage(null));
  } catch (error) {
    yield put(setErrorMessage("Somthing went wrong..."));
  }
  yield put(setIsloading());
}

function* infoSaga() {
  yield takeEvery(ALL_CHARACTERS, handleGetAllCharacters);
}

export default infoSaga;
