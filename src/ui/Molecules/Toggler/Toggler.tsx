/**
 * @author tomek
 * @since 2020-09-17 19:46:12
 */

import * as React from "react";

import {
  StyledToggler,
  StyledButton,
  StyledLeftIcon,
  StyledRightIcon,
} from "./Toggler.styles";
import { BaseProps as Props } from "./Toggler.types";

const Toggler: React.FunctionComponent<Props> = ({ isActive, ...rest }) => (
  <StyledToggler {...rest}>
    <StyledLeftIcon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </StyledLeftIcon>
    <StyledRightIcon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    </StyledRightIcon>
    <StyledButton isActive={isActive} />
  </StyledToggler>
);

export { Toggler };
