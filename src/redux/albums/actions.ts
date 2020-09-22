import { Dispatch } from "redux";
import { ReduxAction } from "@typings";
import { IAlbum } from "@ui/Organisms/Album/Album.types";

export const ADD_ALBUMS = "ALBUMS/ADD_ALBUMS";

export const addAlbums = (payload: IAlbum[]) => (
  dispatch: Dispatch,
): ReduxAction<IAlbum[]> => dispatch({ type: ADD_ALBUMS, payload });
