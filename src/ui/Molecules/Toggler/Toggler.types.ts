import { HTMLAttributes } from "react";

export interface BaseProps extends HTMLAttributes<HTMLElement> {
  isActive?: boolean;
}
