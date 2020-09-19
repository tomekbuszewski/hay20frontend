import { HTMLAttributes, ReactNode } from "react";

export interface BaseProps extends HTMLAttributes<HTMLInputElement> {
  name?: string;
  icon?: ReactNode;
  noMargin?: boolean;
  type?: string;
  autoComplete?: string;
}
