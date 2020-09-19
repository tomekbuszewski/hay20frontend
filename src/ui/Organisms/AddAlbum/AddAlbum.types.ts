import { HTMLAttributes } from "react";

import { IAlbum } from "@ui/Organisms/Album/Album.types";

export interface BaseProps extends HTMLAttributes<HTMLElement> {
  isVisible?: boolean;
  searchResults?: IAlbum[];
}
