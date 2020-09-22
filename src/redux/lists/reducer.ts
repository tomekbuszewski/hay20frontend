import { ReduxAction } from "@typings";

import {
  IAddItem,
  IList,
  IReorder,
  IToggleAction,
  ListsReducer,
} from "./typings";
import { ADD_LIST, TOGGLE_LISTEN_STATE, REORDER, ADD_ITEM } from "./actions";

const initialState: ListsReducer = {
  collection: [],
  db: {},
};

export default function (
  state = initialState,
  action:
    | ReduxAction
    | ReduxAction<IList[]>
    | ReduxAction<IToggleAction>
    | ReduxAction<IReorder>
    | ReduxAction<IAddItem>,
): ListsReducer {
  const { payload, type } = action;

  switch (type) {
    case ADD_LIST: {
      if (payload) {
        return (payload as IList[]).reduce((acc: ListsReducer, item) => {
          const index = item.index;

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

    case TOGGLE_LISTEN_STATE: {
      if (payload) {
        const { album, listIndex } = payload as IToggleAction;
        const list = state.db[listIndex];
        const items = list.items.map((item) => {
          if (String(item.album) === album) {
            return {
              ...item,
              listened: !item.listened,
            };
          } else {
            return item;
          }
        });

        return {
          ...state,
          db: {
            ...state.db,
            [listIndex]: {
              ...list,
              items,
            },
          },
        };
      }

      return state;
    }

    case REORDER: {
      if (payload) {
        const { listIndex, itemFrom, itemTo } = payload as IReorder;
        const list = state.db[listIndex];
        const items = [...list.items];

        const newItems = items.map((item) => {
          if (item.order === itemFrom) {
            return { ...item, order: item.order = itemTo };
          }

          if (item.order <= itemTo && item.order > itemFrom) {
            return {
              ...item,
              order: item.order - 1,
            };
          } else if (item.order >= itemTo && item.order < itemFrom) {
            return {
              ...item,
              order: item.order + 1,
            };
          }

          return item;
        });

        return {
          ...state,
          db: {
            ...state.db,
            [listIndex]: {
              ...list,
              items: newItems,
            },
          },
        };
      }

      return state;
    }
    case ADD_ITEM: {
      if (payload) {
        const { listIndex, ...rest } = payload as IAddItem;

        return {
          ...state,
          db: {
            ...state.db,
            [listIndex]: {
              ...state.db[listIndex],
              items: [...state.db[listIndex].items, rest],
            },
          },
        };
      }

      return state;
    }
    default:
      return state;
  }
}
