import { combineReducers } from "redux";
import albums from "./albums/reducer";
import lists from "./lists/reducer";
import user from "./user/reducer";

export const reducers = {
  albums,

  lists,

  user,
};

export default combineReducers(reducers);
