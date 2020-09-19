/**
 * @author tomek
 * @since 2020-09-19 09:41:55
 */

import styled, { css } from "styled-components";

import { BaseProps as Props } from "./Button.types";
import {
  colorGetter,
  fontFaceGetter,
  fontSizeGetter,
  marginGetter,
  rem,
} from "@ui/helpers";
import { rgba } from "polished";
import { svgStyles } from "@ui/Molecules/Input/Input.styles";

const Button = styled.button<Props>`
  border-radius: ${rem(18)};
  border: 0;
  background: ${colorGetter("shadow")};
  color: ${colorGetter("counter")};

  cursor: pointer;

  line-height: ${rem(36)};
  font-size: ${fontSizeGetter("small")};
  font-family: ${fontFaceGetter("primary")};
  font-weight: 800;

  padding: 0 ${marginGetter("horizontal")};

  height: ${rem(36)};

  ${({ toRight }) =>
    toRight &&
    css`
      margin-left: auto;
    `};

  button + & {
    margin-left: ${marginGetter("horizontal")};
  }

  &:focus,
  &:active {
    outline: 0;
  }

  ${(props) =>
    props.icon &&
    css`
      padding: 0;
      width: ${rem(36)};
      position: relative;

      svg {
        ${svgStyles};
      }
    `};

  ${(props) =>
    props.minor &&
    css`
      padding: 0 ${rem(15)};
      height: ${rem(34)};

      line-height: ${rem(34)};

      border: ${rem(1)} solid ${rgba(colorGetter("shadow")(props), 0.25)};
      background: none;
    `};
`;

export { Button };
