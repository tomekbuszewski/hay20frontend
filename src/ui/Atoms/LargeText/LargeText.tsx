/**
 * @author tomek
 * @since 2020-09-16 18:36:38
 */

import * as React from "react";
import styled from "styled-components";
import { ellipsis } from "polished";

import { colorGetter, fontFaceGetter, fontSizeGetter, rem } from "@ui/helpers";

const LargeText = styled.h2<{
  withEllipsis?: boolean;
}>`
  font-family: ${fontFaceGetter("primary")};
  font-size: ${fontSizeGetter("large")};
  line-height: 1.25;

  color: ${colorGetter("textPrimary")};

  margin: 0;

  ${({ withEllipsis }) => withEllipsis && ellipsis(rem(172))};
`;

export { LargeText };
