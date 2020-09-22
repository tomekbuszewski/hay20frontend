import { DropResult } from "react-beautiful-dnd";

import { IAlbum, IAlbumWithMeta } from "@ui/Organisms/Album/Album.types";
import { ReduxAction } from "@typings";
import { IAddItem, IList, IReorder, IToggleAction } from "@redux/lists/typings";
import * as React from "react";

export interface ContainerProps {
  addAlbums: (payload: IAlbum[]) => ReduxAction<IAlbum[]>;
  addItemToList: (payload: IAddItem[]) => ReduxAction<IAddItem[]>;
  addList: (payload: IList[]) => ReduxAction<IList[]>;
  albums: (listIndex: string) => IAlbumWithMeta[];
  albumsToFetch: (listIndex: string) => number[];
  listStart: (listIndex: string) => Date;
  reorder: (payload: IReorder) => ReduxAction<IReorder>;
  toggleListened: (payload: IToggleAction) => ReduxAction<IToggleAction>;
}

export interface ViewProps {
  activeAlbum: string | null;
  addAlbumHandler: () => void;
  albums: IAlbumWithMeta[];
  formValue: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isLoading?: boolean;
  listStart: Date;
  listVisible: boolean;
  reorder: (input: DropResult) => Promise<void>;
  searchResults?: IAlbum[];
  setActiveAlbum: (id: any) => void;
  setListVisible: () => void;
  toggleAlbum: (id: string) => void;
}
