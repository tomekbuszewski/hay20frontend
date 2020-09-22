export interface IListItem {
  listened: boolean;
  order: number;
  album: number;
}

export interface IList {
  user: number;
  year: number;
  id: number;
  items: IListItem[];
  index: string;
  listStart: Date;
}

export interface ListsReducer {
  collection: string[]; // index
  db: Record<string, IList>;
}

export interface IToggleAction {
  album: string;
  listIndex: string;
}

export interface IReorder {
  listIndex: string;
  itemFrom: number;
  itemTo: number;
}

export interface IAddItem {
  listened: boolean;
  order: number;
  album: number;
  listIndex: string;
}
