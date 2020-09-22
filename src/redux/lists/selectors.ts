import { createSelector } from "reselect";
import { Reducers } from "@redux/typings";
import { IList, ListsReducer } from "@redux/lists/typings";

const getAllListsFunction = ({ lists }: Reducers) => lists;

const getAllListsProducer = ({ collection, db }: ListsReducer): IList[] => {
  return collection.map((index) => db[index]);
};

export const getAllLists = createSelector(
  getAllListsFunction,
  getAllListsProducer,
);

const getAlbumsFromListFunction = (
  listIndex: string,
  { lists }: Reducers,
): number[] | [] => {
  if (lists.db[listIndex]) {
    return lists.db[listIndex].items.map((item) => item.album);
  }

  return [];
};

export const getAlbumsFromList = createSelector(
  getAlbumsFromListFunction,
  (f) => f,
);

const getListStartFunction = (listIndex: string, { lists }: Reducers): Date => {
  return lists.db[listIndex].listStart;
};

export const getListStart = createSelector(getListStartFunction, (f) => f);
