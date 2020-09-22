import { Dispatch } from "redux";
import { ReduxAction } from "@typings";
import { IAddItem, IList, IReorder, IToggleAction } from "@redux/lists/typings";

export const ADD_LIST = "LISTS/ADD_LIST";

export const addList = (payload: IList[]) => (
  dispatch: Dispatch,
): ReduxAction<IList[]> => dispatch({ type: ADD_LIST, payload });

export const TOGGLE_LISTEN_STATE = "LISTS/TOGGLE_LISTEN_STATE";
export const toggleListenState = (payload: IToggleAction) => (
  dispatch: Dispatch,
): ReduxAction<IToggleAction> =>
  dispatch({ type: TOGGLE_LISTEN_STATE, payload });

export const REORDER = "LISTS/REORDER";
export const reorder = (payload: IReorder) => (
  dispatch: Dispatch,
): ReduxAction<IReorder> => dispatch({ type: REORDER, payload });

export const ADD_ITEM = "LISTS/ADD_ITEM";
export const addItemToList = (payload: IAddItem) => (
  dispatch: Dispatch,
): ReduxAction<IAddItem> => dispatch({ type: ADD_ITEM, payload });
