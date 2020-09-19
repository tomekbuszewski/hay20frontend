/**
 * @author tomek
 * @since 2020-09-19 09:06:17
 */

import * as React from "react";

import { StyledInput, StyledWrapper, StyledIcon } from "./Input.styles";
import { BaseProps as Props } from "./Input.types";

const Input = ({ children, icon, name, noMargin, ...props }: Props) => {
  return (
    <StyledWrapper noMargin={noMargin}>
      {icon && <StyledIcon htmlFor={name}>{icon}</StyledIcon>}
      <StyledInput name={name} id={name} {...props} />
      {children}
    </StyledWrapper>
  );
};

export { Input };
