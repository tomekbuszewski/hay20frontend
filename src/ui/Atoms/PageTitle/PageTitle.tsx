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
  rem,
} from "@ui/helpers";

const PageTitle = styled.h2`
  font-family: ${fontFaceGetter("primary")};
  font-size: ${fontSizeGetter("title")};
  line-height: ${rem(32)};

  color: ${colorGetter("counter")};

  margin-top: ${rem(80)};
  margin-bottom: ${marginGetter("horizontal")};
`;

export { PageTitle };
