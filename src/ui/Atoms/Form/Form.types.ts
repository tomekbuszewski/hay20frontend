import { HTMLAttributes, ReactNode } from "react";

export interface BaseProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}
