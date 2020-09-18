import { HTMLAttributes } from "react";

export interface IAlbum {
  artist: string;
  title: string;
  rym?: string;
  qobuz?: string;
  spotify?: string;
  cover?: string;
}

export interface ViewProps {
  isActive?: boolean;
  isListened?: boolean;
  isDragging?: boolean;
  isToday?: boolean;
}

interface IListInfo {
  listPosition: number;
  listenOn: Date;
}

export interface BaseProps extends HTMLAttributes<HTMLElement> {
  album: IAlbum;
  list: IListInfo;
  view: ViewProps;
}
