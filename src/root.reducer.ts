import { combineReducers } from "redux";
import { reducer as app } from "./app/domain";
import { reducer as auth } from "./auth/auth.reducer";

export default combineReducers({ app, auth });

export interface IAction {
  type: string;
}
