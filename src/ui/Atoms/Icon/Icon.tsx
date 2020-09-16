/**
 * @author tomek
 * @since 2020-09-16 18:49:52
 */

import * as React from "react";

import { StyledIcon } from "./Icon.styles";
import { BaseProps as Props } from "./Icon.types";

const Icon: React.FunctionComponent<Props> = (props) => (
  <StyledIcon {...props} />
);

export { Icon };
