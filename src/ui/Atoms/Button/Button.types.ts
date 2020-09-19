import { HTMLAttributes, ReactNode } from "react";

export interface BaseProps extends HTMLAttributes<HTMLButtonElement> {
  icon?: boolean;
  children?: ReactNode;
  minor?: boolean;
}
