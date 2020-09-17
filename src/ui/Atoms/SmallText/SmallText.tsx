/**
 * @author tomek
 * @since 2020-09-16 18:41:26
 */

import * as React from "react";
import styled, { css } from "styled-components";

import { BaseProps as Props } from "./SmallText.types";
import {
  colorGetter,
  fontFaceGetter,
  fontSizeGetter,
  marginGetter,
} from "@ui/helpers";

const SmallText: React.FunctionComponent<Props> = styled.h5<Props>`
  font-family: ${fontFaceGetter("secondary")};
  font-size: ${fontSizeGetter("small")};

  color: ${colorGetter("textSecondary")};

  margin: 0;
  ${(props) =>
    props.withPrefix &&
    css`
      &:before {
        content: "—";
        display: inline-block;

        color: ${colorGetter("accentDark")};

        margin-right: ${marginGetter("small")};
      }
    `};
`;

export { SmallText };
