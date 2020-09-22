import serialize from "serialize-javascript";

const deserialize = (data: string): Record<string, string> =>
  eval("(" + data + ")");

export const STORE_IDENTIFIER = "__store";

export const saveState = (state: Record<string, any>): void => {
  localStorage.setItem(STORE_IDENTIFIER, serialize(state));
};

export const loadState = (): Record<string, string> => {
  const localData = localStorage.getItem(STORE_IDENTIFIER);
  if (localData) {
    return deserialize(localData);
  } else {
    return {};
  }
};
