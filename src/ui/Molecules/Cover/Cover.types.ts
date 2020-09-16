import { HTMLAttributes } from "react";

export interface BaseProps extends HTMLAttributes<HTMLElement> {
  artist: string;
  album: string;
  cover?: string;
}
