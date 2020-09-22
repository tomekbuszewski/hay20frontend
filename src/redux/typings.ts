import { UserReducer } from "@redux/user/typings";
import { ListsReducer } from "@redux/lists/typings";
import { AlbumsReducer } from "@redux/albums/typings";

export type Reducers = {
  user: UserReducer;
  lists: ListsReducer;
  albums: AlbumsReducer;
};
