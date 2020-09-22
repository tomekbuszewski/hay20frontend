import { applyMiddleware, createStore, compose, Store } from "redux";
import thunk from "redux-thunk";

import { loadState, saveState } from "@redux/store.helpers";
import reducers from "@redux/reducers";
import { Reducers } from "@redux/typings";
import { IS_DEV } from "@config/config";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const makeStore = (initialStore = {}): Store<Reducers> => {
  const currentInitialState = {
    ...loadState(),
    ...initialStore,
  };

  return createStore(
    reducers,
    currentInitialState,
    composeEnhancers(applyMiddleware(thunk)),
  );
};

const store = makeStore();

store.subscribe(() => {
  const dataToSave = IS_DEV
    ? { user: store.getState().user }
    : store.getState();
  saveState(dataToSave);
});

export default store;
