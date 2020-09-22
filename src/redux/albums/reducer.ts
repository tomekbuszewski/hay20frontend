import { ReduxAction } from "@typings";

import { IAlbum } from "@ui/Organisms/Album/Album.types";
import { AlbumsReducer } from "./typings";
import { ADD_ALBUMS } from "./actions";

const initialState: AlbumsReducer = {
  collection: [],
  db: {},
};

export default function (
  state = initialState,
  action: ReduxAction | ReduxAction<IAlbum[]>,
): AlbumsReducer {
  const { payload, type } = action;

  switch (type) {
    case ADD_ALBUMS: {
      if (payload) {
        return payload.reduce((acc: AlbumsReducer, item) => {
          const index = String(item.id);

          if (acc.collection.indexOf(index) > -1) {
            return acc;
          }

          return {
            ...acc,
            collection: [...acc.collection, index],
            db: { ...acc.db, [index]: item },
          };
        }, state);
      }

      return state;
    }
    default:
      return state;
  }
}
