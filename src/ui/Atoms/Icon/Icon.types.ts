import { ReactNode, HTMLAttributes } from "react";

export interface BaseProps extends HTMLAttributes<HTMLElement> {
  as?: any;
  children?: ReactNode;
}
