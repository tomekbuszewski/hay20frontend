/**
 * @author tomek
 * @since 2020-09-16 18:36:38
 */

import * as React from "react";
import styled from "styled-components";

import { BaseProps as Props } from "./LargeText.types";
import { colorGetter, fontFaceGetter, fontSizeGetter } from "@ui/helpers";

const LargeText: React.FunctionComponent<Props> = styled.h2`
  font-family: ${fontFaceGetter("primary")};
  font-size: ${fontSizeGetter("large")};

  color: ${colorGetter("textPrimary")};
`;

export { LargeText };
