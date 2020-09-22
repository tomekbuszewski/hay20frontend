import { HTMLAttributes } from "react";

import { IAlbum } from "@ui/Organisms/Album/Album.types";
import * as React from "react";

export interface BaseProps extends HTMLAttributes<HTMLElement> {
  addAlbumHandler: () => void;
  formValue: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isVisible?: boolean;
  searchResults?: IAlbum[];
  setFormVisible?: () => void;
}
