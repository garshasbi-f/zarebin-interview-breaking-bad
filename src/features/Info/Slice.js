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
    getAllQuotes: (state, action) => {
      state.quoteList = action.payload;
      state.randomQuote =
        state.quoteList[Math.floor(Math.random() * state.quoteList.length)];
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    setIsloading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
});

export const { getAllCharacters, getAllQuotes, setErrorMessage, setIsloading } =
  infoSlice.actions;

export const selectStatus = (state) => state.info.status;

export default infoSlice.reducer;
