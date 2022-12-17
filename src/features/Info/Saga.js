import { takeEvery, call, put } from "redux-saga/effects";
import { ALL_CHARACTERS, get_QUOTES } from "./Action";
import { getAllCharactersFromServer, getQuotesFromServer } from "./Api";
import {
  getAllCharacters,
  getAllQuotes,
  setErrorMessage,
  setIsloading,
} from "./Slice";

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

function* handleGetQuote(action) {
  try {
    yield put(setIsloading());
    const response = yield call(getQuotesFromServer, action.payload);
    yield put(getAllQuotes(response));
    yield put(setErrorMessage(null));
  } catch (error) {
    yield put(setErrorMessage("Somthing went wrong..."));
  }
  yield put(setIsloading());
}

function* infoSaga() {
  yield takeEvery(ALL_CHARACTERS, handleGetAllCharacters);
  yield takeEvery(get_QUOTES, handleGetQuote);
}

export default infoSaga;
