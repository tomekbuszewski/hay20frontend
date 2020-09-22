/**
 * @author tomek
 * @since 2020-09-19 19:57:46
 */

import styled from "styled-components";
import {
  boxShadow,
  colorGetter,
  constGetter,
  fontFaceGetter,
  fontSizeGetter,
  marginGetter,
  rem,
  transition,
} from "@ui/helpers";
import { rgba } from "polished";

const CardList = styled.li`
  border-radius: ${constGetter("borderRadius")};
  background: conic-gradient(from 225deg at center, #c83e4d, #9c2936);
  color: ${colorGetter("counter")};

  font-family: ${fontFaceGetter("primary")};
  font-size: ${fontSizeGetter("title")};
  line-height: ${rem(24)};
  text-align: right;

  transition: ${transition("box-shadow")};

  padding: ${marginGetter("horizontal")};
  padding-top: ${rem(152)};

  list-style: none;

  position: relative;
  cursor: pointer;

  height: ${rem(192)};

  box-shadow: ${(props) =>
    boxShadow(rgba(colorGetter("shadow")(props), 0.5), {
      y: "0",
      blur: rem(16),
    })};

  & + li {
    margin-bottom: ${marginGetter("horizontal")};
  }

  &:hover {
    box-shadow: ${(props) =>
      boxShadow(rgba(colorGetter("shadow")(props), 0.5), {
        y: rem(8),
        blur: rem(32),
      })};
  }
`;

export { CardList };
