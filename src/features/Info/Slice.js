import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  charactersList: [],
  quoteList: [],
  randomQuote: {},
  errorMessage: null,
};

export const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    getAllCharacters: (state, action) => {
      state.charactersList = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    setIsloading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
});

export const { getAllCharacters, setErrorMessage, setIsloading } =
  infoSlice.actions;

export const selectStatus = (state) => state.info.status;

export default infoSlice.reducer;
