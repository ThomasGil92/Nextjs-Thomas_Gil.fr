import { combineReducers } from "redux";
import * as types from "./actions";

const initialThemeState="light"


const themeReducer = (state = initialThemeState, { type, payload }) => {
  switch (type) {
    case types.SET_THEME:
      return payload;
    default:
      return state;
  }
};

const reducers = {
  theme:themeReducer
};

export default combineReducers(reducers);
