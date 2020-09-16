/**
 * @author tomek
 * @since 2020-09-16 18:49:52
 */

import styled, { css } from "styled-components";
import { BaseProps as Props } from "./Icon.types";
import {
  boxShadow,
  colorGetter,
  constsGetter,
  marginGetter,
  rem,
  transition,
} from "@ui/helpers";
import { rgba } from "polished";
import { theme } from "@ui/theme";

export const baseStyle = (color: keyof typeof theme.colors) => css`
  transition: ${transition(["box-shadow"])};

  border-radius: 100%;
  box-shadow: ${(props) =>
    boxShadow(rgba(colorGetter(color)(props), 0.5), { blur: rem(8) })};

  &:hover {
    box-shadow: ${(props) =>
      boxShadow(colorGetter(color)(props), { blur: rem(16) })};
  }
`;

const StyledIcon = styled.i<Props>`
  display: block;

  width: ${constsGetter("icon")};
  height: ${constsGetter("icon")};

  margin-right: ${marginGetter("horizontal")};

  &:last-of-type {
    margin-right: 0;
  }
`;

export { StyledIcon };
