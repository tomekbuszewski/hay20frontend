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

export interface BaseProps extends HTMLAttributes<HTMLElement> {
  album: IAlbum;
  listPosition: number;
  listenOn: Date;
}
