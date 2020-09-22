import { ReduxAction } from "@typings";

import { IUserLoginPayload, UserReducer } from "./typings";
import { SET_CREDENTIALS } from "./actions";

const initialState: UserReducer = {};

export default function (
  state = initialState,
  action: ReduxAction | ReduxAction<IUserLoginPayload>,
): UserReducer {
  const { type, payload } = action;

  switch (type) {
    case SET_CREDENTIALS: {
      if (payload) {
        return {
          ...state,
          ...payload,
          id: String(payload.id),
        };
      }

      return state;
    }
    default:
      return state;
  }
}
