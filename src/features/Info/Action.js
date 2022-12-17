import { createAction } from "@reduxjs/toolkit";

export const ALL_CHARACTERS = "all-characters";
export const allCharactersAction = createAction(ALL_CHARACTERS);

export const get_QUOTES = "get-quotes";
export const qoutesAction = createAction(get_QUOTES);
