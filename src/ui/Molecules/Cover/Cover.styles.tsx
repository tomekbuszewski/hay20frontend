/**
 * @author tomek
 * @since 2020-09-16 18:05:46
 */

import styled from "styled-components";
import { colorGetter, constGetter } from "@ui/helpers";

const StyledCover = styled.figure`
  border-radius: ${constGetter("borderRadius")};
  background: ${colorGetter("background")};

  margin: 0;
  padding: 0;
  width: ${constGetter("cover")};
  height: ${constGetter("cover")};

  overflow: hidden;
  position: relative;

  > img {
    top: 50%;
    left: 50%;
    position: absolute;

    transform: translate(-50%, -50%);

    width: ${constGetter("cover")};
    height: ${constGetter("cover")};
  }
`;

export { StyledCover };
