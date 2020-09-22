import store from "@redux/store";
import { UserReducer } from "@redux/user/typings";

export const getCredentials = (): UserReducer => {
  const { user } = store.getState();
  return user;
};
