import { HTMLAttributes } from "react";

export interface BaseProps extends HTMLAttributes<HTMLElement> {
  artist: string;
  title: string;
  cover?: string;
}
