/**
 * @author tomek
 * @since 2020-09-16 18:05:46
 */

import styled from "styled-components";
import { colorGetter, constGetter, rem } from "@ui/helpers";

const StyledCover = styled.figure`
  border-radius: ${constGetter("borderRadius")};
  background: conic-gradient(from 225deg at center, #23272a, #1d2224);

  margin: 0;
  padding: 0;
  width: ${constGetter("cover")};
  height: ${constGetter("cover")};

  overflow: hidden;
  position: relative;

  > img,
  > svg {
    top: 50%;
    left: 50%;
    position: absolute;

    transform: translate(-50%, -50%);

    width: ${constGetter("cover")};
    height: ${constGetter("cover")};
  }

  > svg {
    width: ${rem(48)};
    height: ${rem(48)};
  }
`;

export { StyledCover };
