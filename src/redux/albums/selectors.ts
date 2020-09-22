import { createSelector } from "reselect";
import { Reducers } from "@redux/typings";

const getAlbumsOnListFunction = (
  listIndex: string,
  { albums, lists }: Reducers,
) => {
  const list = lists.db[listIndex];
  if (list) {
    return list.items
      .map(({ album, order, listened }) => {
        return { ...albums.db[album], order, listened };
      })
      .sort((a, b) => a.order - b.order);
  }

  return [];
};

export const getAlbumsOnList = createSelector(
  getAlbumsOnListFunction,
  (f) => f,
);
