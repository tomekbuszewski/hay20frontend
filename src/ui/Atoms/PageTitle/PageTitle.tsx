/**
 * @author tomek
 * @since 2020-09-19 15:38:49
 */

import styled from "styled-components";
import {
  colorGetter,
  fontFaceGetter,
  fontSizeGetter,
  marginGetter,
} from "@ui/helpers";

const PageTitle = styled.h2`
  font-family: ${fontFaceGetter("primary")};
  font-size: ${fontSizeGetter("title")};

  color: ${colorGetter("counter")};

  margin-bottom: ${marginGetter("horizontal")};
`;

export { PageTitle };
