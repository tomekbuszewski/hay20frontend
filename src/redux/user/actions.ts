import { Dispatch } from "redux";
import { ReduxAction } from "@typings";
import { IUserLoginPayload } from "@redux/user/typings";

export const SET_CREDENTIALS = "USER/SET_CREDENTIALS";

export const setCredentials = (payload: IUserLoginPayload) => (
  dispatch: Dispatch,
): ReduxAction<IUserLoginPayload> =>
  dispatch({ type: SET_CREDENTIALS, payload });
