/**
 * @author tomek
 * @since 2020-09-16 18:41:26
 */

import * as React from "react";

import { BaseProps as Props } from "./SmallText.types";
import styled from "styled-components";
import { colorGetter, fontFaceGetter, fontSizeGetter } from "@ui/helpers";

const SmallText: React.FunctionComponent<Props> = styled.h5`
  font-family: ${fontFaceGetter("secondary")};
  font-size: ${fontSizeGetter("small")};

  color: ${colorGetter("textSecondary")};
`;

export { SmallText };
