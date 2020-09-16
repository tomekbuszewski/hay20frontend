/**
 * @author tomek
 * @since 2020-09-16 18:43:43
 */

import * as React from "react";

import { BaseProps as Props } from "./HumongousText.types";
import styled from "styled-components";
import { colorGetter, fontFaceGetter, fontSizeGetter } from "@ui/helpers";

const HumongousText: React.FunctionComponent<Props> = styled.span`
  font-family: ${fontFaceGetter("primary")};
  font-size: ${fontSizeGetter("humongous")};

  color: ${colorGetter("textPrimary")};

  opacity: 0.1;
`;

export { HumongousText };
